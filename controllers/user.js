const _= require('lodash')
const User = require('../models/user')

exports.userById = (req, res, next, id)=>{
    User.findById(id).exec((err, user)=>{
        if(err || !user ){
            return res.status(400).json({
                error : "User not found"
            })
        }
        // error is handled, but what if we get error ?. We should append the user with req object
        req.profile = user // adds profile object in request with user info
        next() 
        
    })
}

//Authorization method 3  
exports.hasAuthorization = (req, res, next) => {
    const authorized = req.profile && req.auth && req.profile._id === req.auth._id;
    if(!authorized){
        return res.status(403).json({
            error: "User is not authorized to perform this action"
        })
    }
}


//Fetch All Users - GET
exports.allUsers = (req, res)=>{
    User.find((err, users)=>{
        if(err){
            return res.status(400).json({
                error : err
            })
        }
        res.json({users: users})
    }).select("name email created updated")
}


//Fetch Single User - GET
exports.getUser = (req, res)=>{
    //userById autodets the id and makes the call to db to fetch user info and appends to req obj. Here we are just
    //making it availabe in response.json.
    req.profile.hashed_password = undefined
    req.profile.salt = undefined
    return res.json(req.profile)
}

//Update user
exports.updateUser = (req, res, next) => {
    let user = req.profile
    user = _.extend(user, req.body)
    user.updated = Date.now()
    user.save( err => {
        if(err){
            return res.status(400).json({
                error : "You are not authorized to perform this action"
            })
        }
        user.hashed_password = undefined
        user.salt = undefined
        res.json({user})
    })
}

//Delete User 
exports.deleteUser = (req, res, next) => {
    let user = req.profile;
    user.remove((err, user)=>{
        if(err){
            return res.status(400).json({
                error : err
            })
        }
     
        res.json({message: "User deleted successfully"})
    })
}
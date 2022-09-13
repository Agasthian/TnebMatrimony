const Post = require('../models/post')
const formidable = require('formidable')
const fs = require('fs')

//Find Posts by id & push to request.post body
exports.postById = (req, res, next, id) => {
    Post.findById(id)
    .populate('postedBy','_id name')
    .exec((err, post)=> {
        if(err || !post){
            return res.status(400).json({
                error : err
            })
        }
        req.post = post
        next()
    })
}

exports.getPosts = (req, res) => {
    //Fetch all posts
    //find inbult method is used "Post" model and the results are sent in a json
    const post = Post.find()
    .populate('postedBy', "_id name")
    .select("_id title body")
    .then((posts)=>{
        res.json({posts: posts})
    })
    .catch(err=> console.log(err))
}

exports.createPost = (req, res, next)=>{

    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files)=>{

        if(err){
            return res.status(400).json({
                error: "Image could not be uploaded"
            })
        }

        let post = new Post(fields)
        req.profile.hashed_password = undefined
        req.profile.salt = undefined
        post.postedBy = req.profile
        //**console.log('PROFILE :>> ', req.profile)//

        if(fields.photo){
            post.photo.data = fs.readFileSync(files.photo.path)
            post.photo.contentType = files.photo.type 
        }

        post.save((err, result)=>{
            if(err){
                return res.status(400).json({
                    error : err
                })
            }
            
            res.json(result)
        })
    })
}

exports.postByUser = (req, res) => {
    Post.find({postedBy: req.profile._id})
        .populate("postedBy", "_id name")
        .sort('_created')
        .exec((err, posts)=>{
            if(err){
                return res.status(400).json({
                    error : err
                })
           }
           res.json({posts : posts});
        })
}

//isPoster() - Checks the requested post id(eg: req - delete/update) with id of the user created ( postedBy._id)
//Checks if the user created is deleting / updating it. Users are not allowed to delete post created by some one else 
exports.isPoster = (req, res, next) => {
    let isPoster = req.post && req.auth && req.post.postedBy._id == req.auth._id;

    if(!isPoster){
        return res.status(403).json({
            error: "User is not authorized to perform this action"
        })
    }
    next();
}

//UPDATE post
exports.updatePost = (req, res, next) => {
    let post = req.post
    post = _.extend(post , req.body)
    post.updated = Date.now()
    post.save( err => {
        if(err){
            return res.status(400).json({
                error : err
            })
        }
        res.json({post: post})
    })
}

//Delete Post
exports.deletePost = (req, res, next) => {
    let post = req.post;
    post.remove((err, post)=>{
        if(err){
            return res.status(400).json({
                error : err
            })
        }
     
        res.json({message: "Post deleted successfully"})
    })
}
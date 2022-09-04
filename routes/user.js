//The functionality is wrtten in controller part & imported here
const express = require('express')
const {requireSignin} = require('../controllers/auth')
const {userById,allUsers,getUser, updateUser, deleteUser} = require('../controllers/user')

const router = express.Router() 

router.get('/users', allUsers)
router.get("/user/:userId", requireSignin , getUser)
router.put("/user/:userId", requireSignin , updateUser)
router.delete("/user/:userId", requireSignin , deleteUser)


//Any route containing :userId, our app will first execute userByID()
router.param('userId', userById)

module.exports = router;


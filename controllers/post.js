const Post = require('../models/post')

exports.getPosts = (req, res) => {
    //Fetch all posts
    //find inbult method is used "Post" model and the results are sent in a json
    const post = Post.find()
    .select("_id title body")
    .then((posts)=>{
        res.json({posts: posts})
    })
    .catch(err=> console.log(err))
}

exports.createPost = (req, res)=>{
    //request body is sent to "Post" model and stored as const post
    const post = new Post(req.body)

    //the const post is Saving to DB with error catch

   post.save().then(result => {
        res.json({
            post: result
        })
    })
}
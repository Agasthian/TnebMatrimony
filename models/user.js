const mongoose = require('mongoose');


//Schema defnition - mongoose documentation
const userSchema = new mongoose.Schema({
    googleId : String,
    facebookId : String,
    credits: {
        type: Number,
        default: 0
    }
})

// Model Creation
mongoose.model('Users', userSchema)
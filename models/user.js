const mongoose = require('mongoose');


//Schema defnition - mongoose documentation
const userSchema = new mongoose.Schema({
    googleId : String
})

// Model Creation
mongoose.model('Users', userSchema)
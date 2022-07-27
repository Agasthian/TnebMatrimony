const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require('cookie-session');
const passport = require("passport");

require('./models/user')
require('./services/passport')
const keys = require('./config/keys')
// const authRoutes = require('./routes/authRoute')



/** Connect Mongo DB */
mongoose.connect(keys.mongoURI)

/** Express App start */
const app = express();

//cookie setup
app.use(
    cookieSession({
        maxAge : 30*24*60*60*1000,
        keys : [keys.cookieKey]
    })
)

//cookie intialization
app.use(passport.initialize());
app.use(passport.session());


//authRoutes(app); //Refactor the code
require('./routes/authRoute')(app)

//Production Routes
if(process.env.NODE_ENV === 'production'){
    //Express will serve the build assets - main.js/css
    app.use(express.static('client1/build'));

    //Express will serve index.html if it dosnt recoganise the route
    const path = require('path');
    app.get( '*', (req,res)=>{
        res.send(path.resolve(__dirname, 'client1', 'build','index.html'))
    })
}

const PORT =  process.env.PORT || 5000
app.listen(PORT)
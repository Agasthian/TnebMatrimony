const express = require("express");
require('./services/passport')
// const authRoutes = require('./routes/authRoute')
const mongoose = require("mongoose")
const keys = require('./config/keys')



/** Connect Mongo DB */
mongoose.connect(keys.mongoURI)

/** Express App start */
const app = express();
// authRoutes(app); //Refactor the code
require('./routes/authRoute')(app)





const PORT =  process.env.port || 5000
app.listen(PORT)
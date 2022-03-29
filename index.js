const express = require("express");
require('./services/passport')
// const authRoutes = require('./routes/authRoute')

const app = express();
// authRoutes(app); //Refactor the code
require('./routes/authRoute')(app)





const PORT =  process.env.port || 5000
app.listen(PORT)
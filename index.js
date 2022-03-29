const express = require("express");
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

//Passport Configuration
passport.use(new GoogleStrategy({
    clientID : keys.googleCliendID,
    clientSecret : keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken,refreshToken,profile, done)=> {
    console.log('accessToken:', accessToken);
    console.log('refreshToken', refreshToken);
    console.log('profile', profile);
    }
));


//Route
app.get('/', (req, res)=> {
    res.send('Helllo World',)
} )

app.get('/auth/google', passport.authenticate('google', {scope: ['profile','email']}))

app.get('/auth/google/callback', passport.authenticate('google'))

const PORT =  process.env.port || 5000
app.listen(PORT)
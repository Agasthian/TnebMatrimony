const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');


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
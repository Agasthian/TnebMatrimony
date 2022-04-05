const passport = require('passport');

module.exports = (app) => {

    //Route
    app.get('/', (req, res)=> {
        res.send('Helllo World',)
    } )

    //Express route - google callback
    app.get('/auth/google', passport.authenticate('google', {scope: ['profile','email']}))

    //2nd Express route to handle callback from google
    app.get('/auth/google/callback',
    passport.authenticate('google')
    );


    app.get('/api/current_user', (req, res)=> {
        res.send(req.user);
    })
 
}


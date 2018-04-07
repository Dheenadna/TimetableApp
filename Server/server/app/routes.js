var AuthenticationController = require('./controllers/authentication'), 
    CourseController = require('./controllers/courses'), 
    express = require('express'),
    passportService = require('../config/passport'),
    passport = require('passport');
 
var requireAuth = passport.authenticate('jwt', {session: false}),
    requireLogin = passport.authenticate('local', {session: false});
 
module.exports = function(app){
 
    var apiRoutes = express.Router(),
        authRoutes = express.Router(),
        courseRoutes = express.Router();
 
    // Auth Routes
    apiRoutes.use('/auth', authRoutes);
 
    authRoutes.post('/register', AuthenticationController.register);
    authRoutes.post('/login', requireLogin, AuthenticationController.login);
 
    authRoutes.get('/protected', requireAuth, function(req, res){
        res.send({ content: 'Success'});
    });
 
    // Todo Routes
    apiRoutes.use('/courses', courseRoutes);
 
    courseRoutes.get('/', requireAuth, AuthenticationController.roleAuthorization(['student','lecturer','moderator', 'administrator']), CourseController.getCourses);
    courseRoutes.post('/', requireAuth, AuthenticationController.roleAuthorization(['student','lecturer','moderator', 'administrator']), CourseController.getTimetable);
    // setup more routes later

    // Set up routes
    app.use('/api', apiRoutes);
 
}
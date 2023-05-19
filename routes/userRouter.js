const express = require('express');
const cors = require('./cors');
const User = require('../models/userModel');
const passport = require('passport')
const authenticate = require('../authenticate');

const userRouter = express.Router();

userRouter.post('/signup', cors.corsWithOptions, (req, res) => {
    User.register(
        new User({username: req.body.username}),
        req.body.password,
        (err, user) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.json({err: err});
            } else {
                passport.authenticate('local')(req, res, () => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json({success: true, status: 'Registration Successful!'});
                });
            }
        }
    );
  });
  
  userRouter.post('/login', cors.corsWithOptions, passport.authenticate('local'), (req, res) => {
    const token = authenticate.getToken({_id: req.user._id});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({success: true, token: token, status: 'You are successfully logged in!'});
  });
  
  userRouter.get('/logout', cors.corsWithOptions, (req, res, next) => {
      if (req.session) {
          req.session.destroy();
          res.clearCookie('session-id');
          res.redirect('/');
      } else {
          const err = new Error('You are not logged in!');
          err.status = 401;
          return next(err);
      }
  });

module.exports = userRouter;
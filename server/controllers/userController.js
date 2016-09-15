const User = require('./../models/userModel');

const userController = {};

userController.createUser = (req, res, next) => {
  const user = new User(req.body);
  user.save((err) => {
    if (err) {
      throw err;
    } else {
      console.log('User created!');
      res.locals.id = user._id;
      next();
    }
  });
};

userController.verifyUser = (req, res, next) => {
  // email and password inputs from login page
  const emailInput = req.body.email;
  const passwordInput = req.body.password;

  User.findOne({ email: emailInput }, function (err, u) {
    if (err) return console.log(err);
    // If email is found in database & passwords match, call next(). Otherwise redirect to /signup. 
    if (u) {
      if (u.password === passwordInput) {
        res.locals.id = u._id;
        next();
      } else {
        res.redirect('/signup');
      }
    } else {
      res.redirect('/signup');
    }
  });
};

module.exports = userController;

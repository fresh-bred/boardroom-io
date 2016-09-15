const Session = require('./../models/sessionModel');

const cookieController = {};
cookieController.setCookie = (req, res, next) => {
  if (!req.cookies.id) res.cookie('id', res.locals.id);
  next();
};

cookieController.checkCookie = (req, res, next) => {
  Session.findOne({ _id: req.cookies.session }, (err, data) => {
    if (data === null) res.redirect('/signup');
    if (data !== null) {
      next();
    }
  });
};

module.exports = cookieController;

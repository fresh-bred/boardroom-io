const Session = require('./../models/sessionModel');

const cookieController = {};
cookieController.setCookie = (req, res, next) => {
  if (!req.cookies.id) res.cookie('id', res.locals.id);
  next();
};

cookieController.checkCookie = (req, res, next) => {
  if (!req.cookies.session) {
    res.redirect('/signup');
  } else {
    Session.findOne({ _id: req.cookies.session }, (err, data) => {
      if (data._id.toString() !== req.cookies.session) {
        res.redirect('/signup');
      } else {
        res.redirect('/boardroom');
      }
    });
  }
};

module.exports = cookieController;

const Session = require('./../models/sessionModel');

const sessionController = {};

sessionController.createSession = (req, res, next) => {
  const session = new Session({ id: res.locals.id, expireAt: Date.now() });
  session.save((err) => {
    if (err) {
      throw err;
    } else {
      console.log('Session created!');
      res.cookie('session', session._id);
      next();
    }
  });
};

module.exports = sessionController;

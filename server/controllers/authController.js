const request = require('request');

const authController = {};

authController.start = (req, res, next) => {
  res.redirect('https://github.com/login/oauth/authorize?client_id=141146750fd62875fcea&&redirect_uri=https://localhost:3000/githubAccess');
};

authController.getToken = (req, res, next) => {
  let url = 'https://github.com/login/oauth/access_token?client_id=141146750fd62875fcea&&' +
    'client_secret=49809d6f280322bacbe65b42734d321209597b59&&' +
    'code=' + req.query.code;
  request.post(url)
    .on('response', (response) => {
      res.redirect('/githubDone');
    });
  console.log(req.query.code);
};

module.exports = authController;

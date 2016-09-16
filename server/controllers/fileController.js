const Promise = require('bluebird');
const MongoClient = require('mongodb').MongoClient;

const File = require('./../models/fileModel');
const User = require('./../models/userModel');

const fileController = {};

fileController.createFile = (req, res) => {
  const file = new File(req.body);
  // find object with correct username in database, create a file schema & push into files array
  User.findByIdAndUpdate(req.cookies.id, { $push: { files: file._id } }, (err) => console.log(err));
  file.save((err) => {
    if (err) {
      res.status(503);
      res.send('file creation failed');
    } else {
      console.log('File created!');
      io.broadcast('element', file);
      res.status(200).send('ok');
    }
  });
};

fileController.getUserFiles = (req, res, next) => {
  User.findById(req.cookies.id, (err, docs) => {
    if (err) {
      throw err;
    } else {
      // do something to load file names into dropdown
      res.userFiles = docs.files;
      next();
    }
  });
};

fileController.parseFiles = (req, res, next) => {
  const allFiles = [];
  const promises = [];
  for (let i = 0; i < res.userFiles.length; i++) {
    promises.push(
    new Promise((resolve, reject) => {
      File.findById(res.userFiles[i], (err, file) => {
        if (err) {
          console.log('file missing, id: ', res.userFile[i]);
        }
        resolve(allFiles.push(file));
      });
    }));
  }
  Promise.all(promises).then(() => { res.files = allFiles; next(); });
};

module.exports = fileController;

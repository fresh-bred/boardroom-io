const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  expireAt: { type: Date, expires: '1h' },
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;

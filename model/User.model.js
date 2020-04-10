const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema(
  {
    email: String,
    username: String,
    password: String,
  },
  { collection: 'users' }
);

module.exports = mongoose.model('UserAccount', UserSchema);

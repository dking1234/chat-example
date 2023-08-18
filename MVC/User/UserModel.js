const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  }
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
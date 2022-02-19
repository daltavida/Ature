const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Every user requires a name'],
  },
  email: {
    type: String,
    required: [true, 'Every user requires an email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  photo: String,
  password: {
    type: String,
    required: [true, 'Every user requires a password'],
    minLength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Every user requires a password'],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'The passwords are not the same',
    },
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;

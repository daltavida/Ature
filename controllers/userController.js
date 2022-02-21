const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
});

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'err',
    message: 'This route is currently not supported',
  });
};

exports.getUserByID = (req, res) => {
  res.status(500).json({
    status: 'err',
    message: 'This route is currently not supported',
  });
};

exports.updateUserByID = (req, res) => {
  res.status(500).json({
    status: 'err',
    message: 'This route is currently not supported',
  });
};

exports.deleteUserByID = (req, res) => {
  res.status(500).json({
    status: 'err',
    message: 'This route is currently not supported',
  });
};

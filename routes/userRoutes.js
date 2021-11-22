const express = require('express');
const router = express.Router();

const getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'err',
    message: 'This route is currently not supported',
  });
};

const createUser = (req, res) => {
  res.status(500).json({
    status: 'err',
    message: 'This route is currently not supported',
  });
};

const getUserByID = (req, res) => {
  res.status(500).json({
    status: 'err',
    message: 'This route is currently not supported',
  });
};

const updateUserByID = (req, res) => {
  res.status(500).json({
    status: 'err',
    message: 'This route is currently not supported',
  });
};

const deleteUserByID = (req, res) => {
  res.status(500).json({
    status: 'err',
    message: 'This route is currently not supported',
  });
};

router.route('/').get(getAllUsers).post(createUser);

router
  .route('/:id')
  .get(getUserByID)
  .patch(updateUserByID)
  .delete(deleteUserByID);

module.exports = router;

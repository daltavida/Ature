const express = require('express');
const tourController = require('./../controllers/tourController');
const router = express.Router();

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTourByID)
  .patch(tourController.updateTourByID)
  .delete(tourController.deleteTourByID);

module.exports = router;

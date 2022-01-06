const express = require('express');
const tourController = require('../controllers/tourController');

const router = express.Router();

router
  .route('/featured')
  .get(tourController.aliasFeatured, tourController.getAllTours);

router.route('/stats').get(tourController.getTourStats);

router.route('/plan/:year').get(tourController.getMonthlyPlan);

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

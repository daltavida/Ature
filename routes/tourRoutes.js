const express = require('express');
const tourController = require('../controllers/tourController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/featured')
  .get(tourController.aliasFeatured, tourController.getAllTours);

router.route('/stats').get(tourController.getTourStats);

router.route('/plan/:year').get(tourController.getMonthlyPlan);

router
  .route('/')
  .get(authController.protect, tourController.getAllTours)
  .post(tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTourByID)
  .patch(tourController.updateTourByID)
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    tourController.deleteTourByID
  );

module.exports = router;

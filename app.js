const express = require('express');
const fs = require('fs');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
};

const getTourByID = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);

  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'success',
    data: tour,
  });
};

const createTour = (req, res) => {
  const newID = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newID }, req.body);

  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};

const updateTourByID = (req, res) => {
  if (req.params.id * 1 >= tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here>...',
    },
  });
};

const deleteTourByID = (req, res) => {
  if (req.params.id * 1 >= tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
};

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

app.use('/api/v1/tours', toursRouter);
const toursRouter = express.Router();

toursRouter.route('/').get(getAllTours).post(createTour);

toursRouter
  .route('/:id')
  .get(getTourByID)
  .patch(updateTourByID)
  .delete(deleteTourByID);

app.route('/api/v1/users').get(getAllUsers).post(createUser);

app
  .route('/api/v1/users/:id')
  .get(getUserByID)
  .patch(updateUserByID)
  .delete(deleteUserByID);

const port = 3000;
app.listen(port, '127.0.0.1', () => {
  console.log(`App running on port ${port}`);
});

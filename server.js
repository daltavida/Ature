const dotenv = require('dotenv');
const mongoose = require('mongoose');

process.on('uncaughtException', (err) => {
  console.log('Uncaught exception, shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({
  path: './config.env',
});

const app = require('./app');

mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('Connected to database');
  });

const port = process.env.PORT || 3000;
const server = app.listen(port, '127.0.0.1', () => {
  console.log(`App running on port ${port}`);
});

process.on('unhandledRejection', (err) => {
  console.log('Unhandled rejection, shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

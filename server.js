const dotenv = require('dotenv');

dotenv.config({
  path: './config.env',
});

const app = require('./app');

const port = process.env.PORT || 3000;
app.listen(port, '127.0.0.1', () => {
  console.log(`App running on port ${port}`);
});

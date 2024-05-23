const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const forumsRoute = require('./routes/forums');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

mongoose
  .connect('', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connection successful');
  })
  .catch((err) => {
    console.log(err);
  });

app.use('/forums', forumsRoute);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

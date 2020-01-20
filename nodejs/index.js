const express = require('express');
const morgan = require('morgan');
const uuidv1 = require('uuid/v1');
const uuidv4 = require('uuid/v4');

const app = express();

app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.json({
    uuidv1: uuidv1(),
    uuidv4: uuidv4(),
  });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('uuid-generator listening on port', port);
});

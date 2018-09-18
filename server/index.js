const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use((req, res, next) => {
  console.log(`${req.method} request receieved at ${req.url}.`);
  next();
});
app.use(express.static('./client/dist'));


const PORT = 3001;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

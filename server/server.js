const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');
const cors = require('cors');

const PORT = 3000;

const app = express();

//Setup cors
app.use(cors());

//Setup body parser
app.use(bodyParser.json());

app.use('/api', routes);

app.listen(PORT, () => {
  console.log("Express server listening in port", PORT);
});

module.exports = app;

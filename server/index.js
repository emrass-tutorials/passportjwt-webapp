const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');
const logger = require('morgan');
const mongoose = require('mongoose');
const config = require('./config/main');
const socketEvents = require('./socketEvents');

const app = express();
mongoose.connect(config.database);
const server = app.listen(config.port);
console.log('Your server is running on port ' + config.port + '.');

const io = require('socket.io').listen(server);
socketEvents(io);

// Setting up basic middleware for all Express requests
app.use(logger('dev')); // Log requests to API using morgan

// Enable CORS from client-side
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router(app);

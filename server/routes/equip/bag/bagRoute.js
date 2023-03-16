const express = require('express');
const bagRoute = express.Router();

const readRoute = require('./read');
const updateRoute = require('./update');


bagRoute.use('/read', readRoute);
bagRoute.use('/update', updateRoute);


module.exports = bagRoute;
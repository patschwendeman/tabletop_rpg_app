const express = require('express');
const barRoute = express.Router();


const readRoute = require('./read');
const updateRoute = require('./update');


barRoute.use('/read', readRoute);
barRoute.use('/update', updateRoute);


module.exports = barRoute;
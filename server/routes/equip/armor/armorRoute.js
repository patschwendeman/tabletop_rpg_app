const express = require('express');
const armorRoute = express.Router();


const readRoute = require('./read');
const updateRoute = require('./update');


armorRoute.use('/read', readRoute);
armorRoute.use('/update', updateRoute);


module.exports = armorRoute;
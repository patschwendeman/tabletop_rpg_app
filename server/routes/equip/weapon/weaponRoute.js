const express = require('express');
const weaponRoute = express.Router();


const readRoute = require('./read');
const updateRoute = require('./update');


weaponRoute.use('/read', readRoute);
weaponRoute.use('/update', updateRoute);


module.exports = weaponRoute;
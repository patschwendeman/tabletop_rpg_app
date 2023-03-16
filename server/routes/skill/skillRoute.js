const express = require('express');
const skillRoute = express.Router();


const writeRoute = require('./skill/write');
const readRoute = require('./skill/read');
const updateRoute = require('./skill/update');


skillRoute.use('/update', updateRoute);
skillRoute.use('/write', writeRoute);
skillRoute.use('/read', readRoute);



module.exports = skillRoute;
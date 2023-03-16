const express = require('express');
const passiveRoute = express.Router();

const read = require('./read');
const update = require('./update');


passiveRoute.use('/read', read);
passiveRoute.use('/update', update);

module.exports = passiveRoute;
const express = require('express');
const personalRoute = express.Router();

const read = require('./read');
const update = require('./update');




personalRoute.use('/read', read);
personalRoute.use('/update', update);


module.exports = personalRoute;
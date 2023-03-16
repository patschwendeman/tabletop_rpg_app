const express = require('express');
const generalRoute = express.Router();

const personalRoute = require('./personal/personalRoute');
const passiveRoute = require('./passive/passiveRoute');

const writeAllRoute = require('./writeAll');



generalRoute.use('/personal', personalRoute);
generalRoute.use('/passive', passiveRoute);

generalRoute.use('/write', writeAllRoute);



module.exports = generalRoute;
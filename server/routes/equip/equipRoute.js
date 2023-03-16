const express = require('express');
const equipRoute = express.Router();


const armorRoute = require('./armor/armorRoute');
const weaponRoute = require('./weapon/weaponRoute');
const barRoute = require('./bar/barRoute');
const bagRoute = require('./bag/bagRoute');

const writeRoute = require('./write');


equipRoute.use('/armor', armorRoute);
equipRoute.use('/weapon', weaponRoute);
equipRoute.use('/bar', barRoute);
equipRoute.use('/bag', bagRoute);

equipRoute.use('/write', writeRoute);


module.exports = equipRoute;
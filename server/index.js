//Import modules
const express = require("express");
const cors = require("cors");
const db = require("./datatbase/database"); 

//Server Settings
const HOST = 'localhost';
const PORT = '8000';

//Create Server
const app = express(); 

app.use(express.json()); //Allows to receive information from the frontend in JSON format
app.use(cors()); //Allows Cross Origin Requests, connecting frontend and backend


//Import Routes
const generalRoute = require('./routes/general/generalRoute');
const equipRoute = require('./routes/equip/equipRoute');
const skillRoute = require('./routes/skill/skillRoute');


//Middleware
app.use('/general', generalRoute);
app.use('/equip', equipRoute);
app.use('/skill', skillRoute);


//run Server
const server = app.listen(PORT, () =>{
    console.log(`Server runs:http://${HOST}:${PORT}`);
});
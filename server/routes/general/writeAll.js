const express = require('express');
const router = express.Router();
//Import Data Model
const generalPersonalModel = require("../../models/generalPersonal");  
const generalPassiveModel = require("../../models/generalPassive");  



//Add new Todo to Database
router.post("/", async (req, res, next)=>{ 



    //Represents the value from the frontend 
const personalMock =   
    {
        "_id": "01",
        "info": [
            {
                "personal" : {
                    "name" : "Clara",
                    "race" : "Elfe",
                    "class" : "Hunter",
                    "religion" : "none",
                    }
            }
        ]

    }
const passiveMock =   
    {
        "_id": "01",
        "info": [
            {
                "passive" : {
                    "initiative" : 20,
                    "honor" : 12,
                    "parade" : 20,
                    "moral" : 6,
                    }
            },
        ]

    }


    //Create new Todo based on defined schema
    const generalPersonal = new generalPersonalModel(personalMock);
    const generalPassive = new generalPassiveModel(passiveMock);

  

    try{
        await generalPersonal.save(); 
        await generalPassive.save();
        res.send("Added new generals to DB");
    }
    catch(err){
        console.log(err);
    }
});

module.exports = router;
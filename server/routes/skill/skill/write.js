const express = require('express');
const router = express.Router();
//Import Data Model
const skillModel = require("../../../models/skill");  


//Add new Todo to Database
router.post("/", async (req, res, next)=>{ 





    //Represents the value from the frontend 
   const mockData =   
    {
        "_id": "06",
        "skills": [
                    {
                        "main": 20,
                        "skills": [
                            {
                                "name": "speak",
                                "value": 20
                            },
                            {
                                "name": "language",
                                "value": 50
                            },
                            {
                                "name": "lie",
                                "value": 1
                            },
                            {
                                "name": "downcut",
                                "value": 5
                            },
                            {
                                "name": "noting",
                                "value": 4
                            }
                        ]  
                    },
                    {
                        "main": 10,
                        "skills": [
                            {
                                "name": "sing",
                                "value": 10
                            },
                            {
                                "name": "no",
                                "value": 50
                            },
                            {
                                "name": "alchemie",
                                "value": 10
                            },
                            {
                                "name": "downcut",
                                "value": 40
                            },
                            {
                                "name": "ererter",
                                "value": 4
                            }
                        ]  
                    },
                    {
                        "main": 3,
                        "skills": [
                            {
                                "name": "ert",
                                "value": 2
                            },
                            {
                                "name": "language",
                                "value": 50
                            },
                            {
                                "name": "alchemie",
                                "value": 10
                            },
                            {
                                "name": "downcut",
                                "value": 10
                            },
                            {
                                "name": "top",
                                "value": 7
                            }
                        ]  
                    }
                ]
    }

    



    //Create new Todo based on defined schema
    const skill = new skillModel(mockData);

  

    try{
        await skill.save(); 
        res.send("Added new skills");
    }
    catch(err){
        console.log(err);
    }

    
});

module.exports = router;
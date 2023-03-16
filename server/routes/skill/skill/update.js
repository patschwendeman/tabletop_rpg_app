const express = require('express');
const router = express.Router();
//Import Data Model
const skillModel = require("../../../models/skill");  

//Read all Todos from the Database
router.put("/:_id", async (req, res)=>{  

    const _id = req.params._id;
    let newSkill = req.body




    const mockData =   
    {
       
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
    

    
    
    try {
        const updatedSkill = await skillModel.findById(_id)
            updatedSkill.skills[0].main= req.body[0].main;

            updatedSkill.skills[0].skills[0].name= req.body[0].skills[0].name;
            updatedSkill.skills[0].skills[0].value= req.body[0].skills[0].value;
            updatedSkill.skills[0].skills[1].name= req.body[0].skills[1].name;
            updatedSkill.skills[0].skills[1].value= req.body[0].skills[1].value;
            updatedSkill.skills[0].skills[2].name= req.body[0].skills[2].name;
            updatedSkill.skills[0].skills[2].value= req.body[0].skills[2].value;
            updatedSkill.skills[0].skills[3].name= req.body[0].skills[3].name;
            updatedSkill.skills[0].skills[3].value= req.body[0].skills[3].value;
            updatedSkill.skills[0].skills[4].name= req.body[0].skills[4].name;
            updatedSkill.skills[0].skills[4].value= req.body[0].skills[4].value;

            updatedSkill.skills[1].main= req.body[1].main;

            updatedSkill.skills[1].skills[0].name= req.body[1].skills[0].name;
            updatedSkill.skills[1].skills[0].value= req.body[1].skills[0].value;
            updatedSkill.skills[1].skills[1].name= req.body[1].skills[1].name;
            updatedSkill.skills[1].skills[1].value= req.body[1].skills[1].value;
            updatedSkill.skills[1].skills[2].name= req.body[1].skills[2].name;
            updatedSkill.skills[1].skills[2].value= req.body[1].skills[2].value;
            updatedSkill.skills[1].skills[3].name= req.body[1].skills[3].name;
            updatedSkill.skills[1].skills[3].value= req.body[1].skills[3].value;
            updatedSkill.skills[1].skills[4].name= req.body[1].skills[4].name;
            updatedSkill.skills[1].skills[4].value= req.body[1].skills[4].value;


            updatedSkill.skills[2].main= req.body[2].main;
           
            updatedSkill.skills[2].skills[0].name= req.body[2].skills[0].name;
            updatedSkill.skills[2].skills[0].value= req.body[2].skills[0].value;
            updatedSkill.skills[2].skills[1].name= req.body[2].skills[1].name;
            updatedSkill.skills[2].skills[1].value= req.body[2].skills[1].value;
            updatedSkill.skills[2].skills[2].name= req.body[2].skills[2].name;
            updatedSkill.skills[2].skills[2].value= req.body[2].skills[2].value;
            updatedSkill.skills[2].skills[3].name= req.body[2].skills[3].name;
            updatedSkill.skills[2].skills[3].value= req.body[2].skills[3].value;
            updatedSkill.skills[2].skills[4].name= req.body[2].skills[4].name;
            updatedSkill.skills[2].skills[4].value= req.body[2].skills[4].value;
           
            await updatedSkill.save();
            res.send("Skill Updated");
       
        
    }
    catch(err){
        console.log(err)
    }

    
});

module.exports = router;
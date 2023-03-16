const express = require('express');
const router = express.Router();
//Import Data Model
const generalPersonalModel = require("../../../models/generalPersonal");  

//Read all Todos from the Database
router.put("/:_id", async (req, res)=>{  

    const _id = req.params._id;

    let newPersonal = req.body;

    

    

    
    
    try {
        await generalPersonalModel.findById(_id,  (err, updatedPersonal)=> {
            updatedPersonal.info[0].personal.name= newPersonal.name;
            updatedPersonal.info[0].personal.race= newPersonal.race;
            updatedPersonal.info[0].personal.class= newPersonal.class;
            updatedPersonal.info[0].personal.religion= newPersonal.religion;
 
            updatedPersonal.save();
            res.send("personal Updated");
        });
        
    }
    catch(err){
        console.log(err)
    }

    
});

module.exports = router;
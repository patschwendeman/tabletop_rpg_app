const express = require('express');
const router = express.Router();
//Import Data Model
const generalPassiveModel = require("../../../models/generalPassive");  

//Read all Todos from the Database
router.put("/:_id", async (req, res)=>{  

    const _id = req.params._id;
    let newPassive = req.body
    

    
    
    try {
        const updatedPassive = await generalPassiveModel.findById(_id)
            updatedPassive.info[0].passive.initiative= newPassive.initiative;
            updatedPassive.info[0].passive.honor= newPassive.honor;
            updatedPassive.info[0].passive.parade= newPassive.parade;
            updatedPassive.info[0].passive.moral= newPassive.moral;
           
        await updatedPassive.save();
        res.send("Passive Updated");
    
        
    }
    catch(err){
        console.log(err)
    }

    
});

module.exports = router;
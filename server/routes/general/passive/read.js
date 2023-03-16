const express = require('express');
const router = express.Router();
//Import Data Model
const generalPassiveModel = require("../../../models/generalPassive");  

//Read all Todos from the Database
router.get("/:_id", async (req, res)=>{  

    const _id = req.params._id;
    try {
        const result = await generalPassiveModel.findById(_id)
        res.send(result);

        
    }
    catch(err){
        console.log(err)
    }

    
});

module.exports = router;
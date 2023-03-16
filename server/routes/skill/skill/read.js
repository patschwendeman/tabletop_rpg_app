const express = require('express');
const router = express.Router();
//Import Data Model
const skillModel = require("../../../models/skill");  

//Read all Todos from the Database
router.get("/:_id", async (req, res)=>{  

    const _id = req.params._id;
    try {
        const result = await skillModel.findById(_id)
            res.send(result);
        
        
    }
    catch(err){
        console.log(err)
    }
   
});

module.exports = router;
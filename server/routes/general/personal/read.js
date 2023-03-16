const express = require('express');
const router = express.Router();
//Import Data Model
const generalPersonalModel = require("../../../models/generalPersonal");  

//Read all Todos from the Database
router.get("/:_id", async (req, res)=>{  

    const _id = req.params._id;
    try {
        await generalPersonalModel.findById(_id, (err, result)=> {
            res.send(result);
        });
        
    }
    catch(err){
        console.log(err)
    }
   
});

module.exports = router;
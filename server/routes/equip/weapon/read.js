const express = require('express');
const router = express.Router();
//Import Data Model
const equipWeaponModel = require("../../../models/equipWeapon"); 


//Read all Todos from the Database
router.get("/:_id", async (req, res)=>{  

    const _id = req.params._id;
    try {
        await equipWeaponModel.findById(_id, (err, result)=> {
            res.send(result);
        });
        
    }
    catch(err){
        console.log(err)
    }
   
});

module.exports = router;
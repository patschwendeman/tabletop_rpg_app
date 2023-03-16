const express = require('express');
const router = express.Router();
//Import Data Model
const equipWeaponModel = require("../../../models/equipWeapon");

//Read all Todos from the Database
router.put("/:_id", async (req, res)=>{  

    const _id = req.params._id;


    console.log(req.body)

    const updatedWeapon = {"weapon": [
        {
          "name" :  "",
          "value" :  100,
        },
        {
            "name" :  "",
            "value" :  100,
        },
        {
            "name" :  "",
            "value" :  100,
        },
      ]}

    try {
        const updatedWeapon = await equipWeaponModel.findById(_id)
            updatedWeapon.weapon[0].name= req.body.weapon[0].name;
            updatedWeapon.weapon[0].value= req.body.weapon[0].value;
            updatedWeapon.weapon[1].name= req.body.weapon[1].name;
            updatedWeapon.weapon[1].value= req.body.weapon[1].value;
            updatedWeapon.weapon[2].name= req.body.weapon[2].name;
            updatedWeapon.weapon[2].value= req.body.weapon[2].value;
            
 
            await updatedWeapon.save();
            res.send("Weapon Updated");
      
        
    }
    catch(err){
        console.log(err)
    }



    
});

module.exports = router;
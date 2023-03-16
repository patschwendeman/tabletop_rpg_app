const express = require('express');
const router = express.Router();
//Import Data Model
const equipArmorModel = require("../../../models/equipArmor");

//Read all Todos from the Database
router.put("/:_id", async (req, res)=>{  

    const _id = req.params._id;



    console.log(req.body)

    const updatedArmor = {"armor": [
        {
          "name" :  "",
          "value" :  99,
        },
        {
            "name" :  "",
            "value" :  99,
        },
        {
            "name" :  "",
            "value" :  99,
        },
        {
            "name" :  "",
            "value" :  99,
        },
      ]}

    

    

    

    
    
    try {
        await equipArmorModel.findById(_id,  (err, updatedArmor)=> {
            updatedArmor.armor[0].name= req.body.armor[0].name;
            updatedArmor.armor[0].value= req.body.armor[0].value;
            updatedArmor.armor[1].name= req.body.armor[1].name;
            updatedArmor.armor[1].value= req.body.armor[1].value;
            updatedArmor.armor[2].name= req.body.armor[2].name;
            updatedArmor.armor[2].value= req.body.armor[2].value;
            updatedArmor.armor[3].name= req.body.armor[3].name;
            updatedArmor.armor[3].value= req.body.armor[3].value;

 
            updatedArmor.save();
            res.send("Armor Updated");
        });
        
    }
    catch(err){
        console.log(err)
    }



    
});

module.exports = router;
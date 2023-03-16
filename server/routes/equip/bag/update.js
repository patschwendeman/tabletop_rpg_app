const express = require('express');
const router = express.Router();
//Import Data Model
const equipBagModel = require("../../../models/equipBag");

//Read all Todos from the Database
router.put("/:_id", async (req, res)=>{  

    const _id = req.params._id;



    console.log(req.body)

    const updatedBag = {"bag": [
        {
          "name" :  "",
          "value" :  100,
        },
        {
            "name" :  "",
            "value" :  100,
        }
        
      ]}

    

    

    

    
    
    try {
        const updatedBag = await equipBagModel.findById(_id)
            updatedBag.bag[0].name= req.body.bag[0].name;
            updatedBag.bag[0].value= req.body.bag[0].value;
            updatedBag.bag[1].name= req.body.bag[1].name;
            updatedBag.bag[1].value= req.body.bag[1].value;
            

 
            await updatedBag.save();
            res.send("Bag Updated");
        
        
    }
    catch(err){
        console.log(err)
    }



    
});

module.exports = router;
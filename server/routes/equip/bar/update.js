const express = require('express');
const router = express.Router();
//Import Data Model
const equipBarModel = require("../../../models/equipBar");

//Read all Todos from the Database
router.put("/:_id", async (req, res)=>{  

    const _id = req.params._id;

    let newskill = req.body;

    console.log(req.body)

    const updatedBar = {"bar": [
        {
          "max" :  100,
          "current" :  100,
        },
        {
            "max" :  100,
            "current" :  100,
        },
        {
            "max" :  100,
            "current" :  100,
        },
      ]}

    

    

    

    
    
    try {
        await equipBarModel.findById(_id,  (err, updatedBar)=> {
            updatedBar.bar[0].current= req.body.bar[0].current;
            updatedBar.bar[1].current= req.body.bar[1].current;
            updatedBar.bar[2].current= req.body.bar[2].current;

 
            updatedBar.save();
            res.send("personal Updated");
        });
        
    }
    catch(err){
        console.log(err)
    }



    
});

module.exports = router;
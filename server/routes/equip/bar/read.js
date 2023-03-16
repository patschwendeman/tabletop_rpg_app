const express = require('express');
const router = express.Router();
//Import Data Model
const equipBarModel = require("../../../models/equipBar");  


//Read all Todos from the Database
router.get("/:_id", async (req, res)=>{  

    const _id = req.params._id;
    try {
        await equipBarModel.findById(_id, (err, result)=> {
            res.send(result);
        });
        
    }
    catch(err){
        console.log(err)
    }
   
});

module.exports = router;
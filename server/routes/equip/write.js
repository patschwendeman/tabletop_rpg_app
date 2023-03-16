const express = require('express');
const router = express.Router();
//Import Data Model
const equipArmorModel = require("../../models/equipArmor");  
const equipWeaponModel = require("../../models/equipWeapon");  
const equipBagModel = require("../../models/equipBag"); 
const equipBarModel = require("../../models/equipBar"); 
  



//Add new Todo to Database
router.post("/", async (req, res, next)=>{ 



    //Represents the value from the frontend 
const armorMock =   
    {
        "_id": "04",
        "armor": [
            {
              "name" :  "none",
              "value" :  0,
            },
            {
              "name" :  "Metall",
              "value" :  100,
            },
            {
              "name" :  "none",
              "value" :  0,
            },
            {
              "name" :  "Airmax",
              "value" :  100,
            }
          ]
    }

    const weaponMock =   
    {
        "_id": "04",
        "weapon": [
            {
              "name" :  "Longsword",
              "value" :  "4W20",
            },
            {
              "name" :  "Bow",
              "value" :  "1W20",
            },
            {
              "name" :  "none",
              "value" :  "none",
            }
          ]
    }

    const bagMock =   
    {
        "_id": "04",
        "bag": [
            {
              "name" :  "Gold",
              "value" :  300,
            },
            {
              "name" :  "Silver",
              "value" :  0,
            }
          ]
    }

    const barMock =   
    {
        "_id": "04",
        "bar": [
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
                "current" :  10,
            },
          ]
    }


    //Create new Todo based on defined schema
    const equipArmor = new equipArmorModel(armorMock);
    const equipWeapon = new equipWeaponModel(weaponMock);
    const equipBag = new equipBagModel(bagMock);
    const equipBar = new equipBarModel(barMock);


  

    try{
        await equipArmor.save(); 
        await equipWeapon.save(); 
        await equipBag.save(); 
        await equipBar.save(); 

        res.send("Added new equip to DB");
    }
    catch(err){
        console.log(err);
    }
});

module.exports = router;
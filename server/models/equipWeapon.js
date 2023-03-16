//Define the schema of the collection (data table) in the code 

const mongoose = require("mongoose"); 

//Object as the representation of the data schmema
const equipWeaponSchema = new mongoose.Schema({
    _id: String,
    weapon: [
      {
        name :  String,
        value :  String,
      },
      {
        name :  String,
        value :  String,
      },
      {
        name :  String,
        value :  String,
      }
    ]
        
  })

//Representation of the insatnce of the collection in the DB
const equipWeaponModel = mongoose.model('equipWeapon', equipWeaponSchema); 

module.exports = equipWeaponModel

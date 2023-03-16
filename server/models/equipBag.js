//Define the schema of the collection (data table) in the code 

const mongoose = require("mongoose"); 

//Object as the representation of the data schmema
const equipBagSchema = new mongoose.Schema({
    _id: String,
    bag: [
      {
        name :  String,
        value :  Number,
      },
      {
        name :  String,
        value :  Number,
      }
    ]
  })
  
//Representation of the insatnce of the collection in the DB
const equipBagModel = mongoose.model('equipBag', equipBagSchema); 

module.exports = equipBagModel
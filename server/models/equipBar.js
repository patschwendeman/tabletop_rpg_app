//Define the schema of the collection (data table) in the code 

const mongoose = require("mongoose"); 

//Object as the representation of the data schmema
const equipBarSchema = new mongoose.Schema({
    _id: String,
    bar: [
      {
        max :  Number,
        current :  Number,
      },
      {
        max :  Number,
        current :  Number,
      },
      {
        max :  Number,
        current :  Number,
      },
    ]
  })
  
//Representation of the insatnce of the collection in the DB
const equipBarModel = mongoose.model('equipBar', equipBarSchema); 

module.exports = equipBarModel
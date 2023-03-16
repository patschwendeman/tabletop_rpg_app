//Define the schema of the collection (data table) in the code 

const mongoose = require("mongoose"); 

//Object as the representation of the data schmema
const generalPassiveSchema = new mongoose.Schema({
    _id: String,
    info: [
      {
        passive : {
          initiative :  Number,
          honor :  Number,
          parade :  Number,
          moral :  Number,
        }
      }
    ]
        
  })

//Representation of the insatnce of the collection in the DB
const generalPassiveModel = mongoose.model('GeneralPassive', generalPassiveSchema); 

module.exports = generalPassiveModel

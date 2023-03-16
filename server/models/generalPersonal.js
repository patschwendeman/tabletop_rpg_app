//Define the schema of the collection (data table) in the code 

const mongoose = require("mongoose"); 

//Object as the representation of the data schmema
const generalPersonalSchema = new mongoose.Schema({
    _id: String,
    info: [
      {
        personal : {
          name : String,
          race : String,
          class : String,
          religion : String,
        }
      }
      
    ]
        
  })

//Representation of the insatnce of the collection in the DB
const generalPersonalModel = mongoose.model('GeneralPersonal', generalPersonalSchema); 

module.exports = generalPersonalModel

//Define the schema of the collection (data table) in the code 

const mongoose = require("mongoose"); 

//Object as the representation of the data schmema
const skillSchema = new mongoose.Schema({
    _id: String,
    skills:[
      {
        main :  Number,
        skills : [
          {
            name :  String ,
            value :  Number
          },
          {
            name :  String ,
            value :  Number
          },
          {
            name :  String ,
            value :  Number
          },
          {
            name :  String ,
            value :  Number
          },
          {
            name :  String ,
            value :  Number
          }
        ]  
      },
      {
        main :  Number,
        skills : [
          {
            name :  String ,
            value :  Number
          },
          {
            name :  String ,
            value :  Number
          },
          {
            name :  String ,
            value :  Number
          },
          {
            name :  String ,
            value :  Number
          },
          {
            name :  String ,
            value :  Number
          }
        ]  
      },
      {
        main :  Number,
        skills : [
          {
            name :  String ,
            value :  Number
          },
          {
            name :  String ,
            value :  Number
          },
          {
            name :  String ,
            value :  Number
          },
          {
            name :  String ,
            value :  Number
          },
          {
            name :  String ,
            value :  Number
          }
        ]  
      }
      
    ]

})

//Representation of the insatnce of the collection in the DB
const skillModel = mongoose.model('Skills', skillSchema); 

module.exports = skillModel; 

    
require('dotenv').config();
const mongoose = require("mongoose");

const mongoURI = `mongodb+srv://${process.env.MONGO_URI_NAME}:${process.env.MONGO_URI_PASSWORD}@cluster0.uv4nr.mongodb.net/PenAndPaper`;


//Connection to MongoDB Atlas Database Cluster
const db = mongoose.connect(
    mongoURI, {
})

    .then(res => {
        console.log("MongoDB connected")
    });

module.exports = db; 



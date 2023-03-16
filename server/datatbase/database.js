const express = require('express');
const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://eap4d:m20biw0w@cluster0.uv4nr.mongodb.net/PenAndPaper";

//Connection to MongoDB Atlas Database Cluster
const db = mongoose.connect(
    mongoURI, {
})

    .then(res => {
        console.log("MongoDB connected")
    });

module.exports = db; 



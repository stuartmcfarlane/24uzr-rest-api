const mongoose = require('mongoose');

const bouySchema = mongoose.Schema({
    name : String,
    location : {
        lat : Number,
        lon : Number
    }
});

module.exports = bouySchema;
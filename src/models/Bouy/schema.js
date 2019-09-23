const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bouySchema = mongoose.Schema({
    mapId: ObjectId,
    name : String,
    location : {
        lat : Number,
        lon : Number
    }
});

module.exports = bouySchema;
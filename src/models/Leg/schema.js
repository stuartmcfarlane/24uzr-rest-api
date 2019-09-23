const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const legSchema = mongoose.Schema({
    mapId: ObjectId,
    start: ObjectId,
    end: ObjectId
});

module.exports = legSchema;
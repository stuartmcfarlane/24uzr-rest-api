const mongoose = require('mongoose');

const shipSchema = require('./schema');

module.exports = mongoose.model('Ship', shipSchema);
const mongoose = require('mongoose');

const mapSchema = require('./schema');

module.exports = mongoose.model('Map', mapSchema);
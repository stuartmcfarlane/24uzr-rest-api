const mongoose = require('mongoose');

const legSchema = require('./schema');

module.exports = mongoose.model('Leg', legSchema);
const mongoose = require('mongoose');

const bouySchema = require('./schema');

module.exports = mongoose.model('Bouy', bouySchema);
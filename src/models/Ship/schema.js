const mongoose = require('mongoose');

const shipSchema = mongoose.Schema({
    name : String,
    type : String,
    orcRating : Number,
    speed : {
        '1' : {
            '0'   : Number,
            '45'  : Number,
            '90'  : Number,
            '135' : Number,
            '180' : Number,
            '180' : Number,
        },
        '2' : {
            '0'   : Number,
            '45'  : Number,
            '90'  : Number,
            '135' : Number,
            '180' : Number,
            '180' : Number,
        },
        '3' : {
            '0'   : Number,
            '45'  : Number,
            '90'  : Number,
            '135' : Number,
            '180' : Number,
            '180' : Number,
        },
        '4' : {
            '0'   : Number,
            '45'  : Number,
            '90'  : Number,
            '135' : Number,
            '180' : Number,
            '180' : Number,
        },
        '5' : {
            '0'   : Number,
            '45'  : Number,
            '90'  : Number,
            '135' : Number,
            '180' : Number,
            '180' : Number,
        },
        '6' : {
            '0'   : Number,
            '45'  : Number,
            '90'  : Number,
            '135' : Number,
            '180' : Number,
            '180' : Number,
        },
        '7' : {
            '0'   : Number,
            '45'  : Number,
            '90'  : Number,
            '135' : Number,
            '180' : Number,
            '180' : Number,
        },
    }
});

module.exports = shipSchema;
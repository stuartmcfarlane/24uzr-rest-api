const boom = require('boom');
const windService = require('../services/windService');

exports.getWind = async (req, reply) => {
    try {
        return windService.getWind();
    } catch (err) {
        throw boom.boomify(err);
    }
}


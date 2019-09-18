const boom = require('boom');
const routeService = require('../services/routeService');

exports.getRoutes = async (req, reply) => {
    try {
        const start = req.query.start;
        const end = req.query.end;
        return routeService.getRoutes(start, end);
    } catch (err) {
        throw boom.boomify(err);
    }
}


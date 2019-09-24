const boom = require('boom');
const routeService = require('../services/routeService');

exports.getRoutes = async (req, reply) => {
    try {
        const start = req.query.start;
        const end = req.query.end;
        const mapId = req.query.mapId;
        const shipId = req.query.shipId;
        return routeService.getRoutes(shipId, mapId, start, end);
    } catch (err) {
        throw boom.boomify(err);
    }
}


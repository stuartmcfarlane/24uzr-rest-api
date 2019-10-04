const boom = require('boom');
const routeService = require('../services/routeService');

exports.getRoutes = async (req, reply) => {
    try {
        const start = req.query.start;
        const end = req.query.end;
        const mapId = req.query.mapId;
        const shipId = req.query.shipId;
        const wind = {
            knots: req.query.windKnots,
            degrees: req.query.windDegrees
        };
        return routeService.getRoutes(shipId, mapId, start, end, wind);
    } catch (err) {
        throw boom.boomify(err);
    }
}


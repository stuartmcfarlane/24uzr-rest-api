const boom = require('boom');
const shipService = require('../services/shipService');

exports.getShips = async (req, reply) => {
    try {
        return shipService.getShips();
    } catch (err) {
        throw boom.boomify(err);
    }
}

exports.getShip = async (req, reply) => {
    try {
        const id = req.params.id;
        return shipService.getShip(id);
    } catch (err) {
        throw boom.boomify(err);
    }
}

exports.addShip = async (req, reply) => {
    try {
        const ship = new Ship(req.body);
        return shipService.addShip(ship);
    } catch (err) {
        throw boom.boomify(err);
    }
}

exports.updateShip = async (req, reply) => {
    try {
        const id = req.params.id;
        const ship = req.body;
        return shipService.updateShip(id, ship);
    } catch (err) {
        throw boom.boomify(err);
    }
}

exports.deleteShip = async (req, reply) => {
    try {
        const id = req.params.id;
        return shipService.deleteShip(id);
    } catch (err) {
        throw boom.boomify(err);
    }
}

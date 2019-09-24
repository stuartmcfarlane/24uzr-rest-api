const boom = require('boom');
const mapService = require('../services/mapService');

exports.getMaps = async (req, reply) => {
    try {
        const query = req.query;
        return mapService.getMaps(query);
    } catch (err) {
        throw boom.boomify(err);
    }
}

exports.getMap = async (req, reply) => {
    try {
        const id = req.params.id;
        return mapService.getMap(id);
    } catch (err) {
        throw boom.boomify(err);
    }
}

exports.addMap = async (req, reply) => {
    try {
        const map = new Map(req.body);
        return mapService.addMap(map);
    } catch (err) {
        throw boom.boomify(err);
    }
}

exports.updateMap = async (req, reply) => {
    try {
        const id = req.params.id;
        const map = req.body;
        return mapService.updateMap(id, map);
    } catch (err) {
        throw boom.boomify(err);
    }
}

exports.deleteMap = async (req, reply) => {
    try {
        const id = req.params.id;
        return mapService.deleteMap(id);
    } catch (err) {
        throw boom.boomify(err);
    }
}

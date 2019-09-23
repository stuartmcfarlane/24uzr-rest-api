const boom = require('boom');
const legService = require('../services/legService');

exports.getLegs = async (req, reply) => {
    try {
        const query = req.query;
        return legService.getLegs(query);
    } catch (err) {
        throw boom.boomify(err);
    }
}

exports.getLeg = async (req, reply) => {
    try {
        const id = req.params.id;
        return legService.getLeg(id);
    } catch (err) {
        throw boom.boomify(err);
    }
}

exports.addLeg = async (req, reply) => {
    try {
        return legService.addLeg(req.body);
    } catch (err) {
        throw boom.boomify(err);
    }
}

exports.updateLeg = async (req, reply) => {
    try {
        const id = req.params.id;
        const leg = req.body;
        return legService.updateLeg(id, leg);
    } catch (err) {
        throw boom.boomify(err);
    }
}

exports.deleteLeg = async (req, reply) => {
    try {
        const id = req.params.id;
        return legService.deleteLeg(id);
    } catch (err) {
        throw boom.boomify(err);
    }
}

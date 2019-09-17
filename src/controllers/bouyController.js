const boom = require('boom');
const bouyService = require('../services/bouyService');

exports.getBouys = async (req, reply) => {
    try {
        const bouys = bouyService.getBouys();
        return bouys;
    } catch (err) {
        throw boom.boomify(err);
    }
}

exports.getBouy = async (req, reply) => {
    try {
        const id = req.params.id;
        return bouyService.getBouy(id);
    } catch (err) {
        throw boom.boomify(err);
    }
}

exports.addBouy = async (req, reply) => {
    try {
        return bouyService.addBouy(req.body);
    } catch (err) {
        throw boom.boomify(err);
    }
}

exports.updateBouy = async (req, reply) => {
    try {
        const id = req.params.id;
        const bouy = req.body;
        return bouyService.updateBouy(id, bouy);
    } catch (err) {
        throw boom.boomify(err);
    }
}

exports.deleteBouy = async (req, reply) => {
    try {
        const id = req.params.id;
        return bouyService.deleteBouy(id);
    } catch (err) {
        throw boom.boomify(err);
    }
}

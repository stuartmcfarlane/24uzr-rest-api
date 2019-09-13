const boom = require('boom');
const Bouy = require('../models/Bouy');

exports.getBouys = async (req, reply) => {
    try {
        const bouys = await Bouy.find();
        return bouys;
    } catch (err) {
        throw boom.boomify(err);
    }
}

exports.getBouy = async (req, reply) => {
    try {
        const id = req.params.id;
        const bouy = await Bouy.find(id);
        return bouys;
    } catch (err) {
        throw boom.boomify(err);
    }
}

exports.addBouy = async (req, reply) => {
    try {
        const bouy = new Bouy(req.body);
        return bouy.save();
    } catch (err) {
        throw boom.boomify(err);
    }
}

exports.updateBouy = async (req, reply) => {
    try {
        const id = req.params.id;
        const bouy = req.body;
        const { ...updateData } = bouy;
        const update = await Bouy.findByIsAndUpdate(id, updateData, { new: true});
        return update;
    } catch (err) {
        throw boom.boomify(err);
    }
}

exports.deleteBouy = async (req, reply) => {
    try {
        const id = req.params.id;
        const bouy = await Bouy.findByIsAndRemove(id);
        return bouy;
    } catch (err) {
        throw boom.boomify(err);
    }
}

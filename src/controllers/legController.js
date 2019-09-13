const boom = require('boom');
const Leg = require('../models/Leg');

exports.getLegs = async (req, reply) => {
    try {
        const legs = await Leg.find();
        return legs;
    } catch (err) {
        throw boom.boomify(err);
    }
}

exports.getLeg = async (req, reply) => {
    try {
        const id = req.params.id;
        const leg = await Leg.find(id);
        return legs;
    } catch (err) {
        throw boom.boomify(err);
    }
}

exports.addLeg = async (req, reply) => {
    try {
        const leg = new Leg(req.body);
        return leg.save();
    } catch (err) {
        throw boom.boomify(err);
    }
}

exports.updateLeg = async (req, reply) => {
    try {
        const id = req.params.id;
        const leg = req.body;
        const { ...updateData } = leg;
        const update = await Leg.findByIsAndUpdate(id, updateData, { new: true});
        return update;
    } catch (err) {
        throw boom.boomify(err);
    }
}

exports.deleteLeg = async (req, reply) => {
    try {
        const id = req.params.id;
        const leg = await Leg.findByIsAndRemove(id);
        return leg;
    } catch (err) {
        throw boom.boomify(err);
    }
}

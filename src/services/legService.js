const boom = require('boom');
const Leg = require('../models/Leg');

exports.getLegs = async (query = {}) => {
    const legs = await Leg.find(query);
    return legs;
}

exports.getLeg = async (id) => {
    const leg = await Leg.find({_id: id});
    return leg;
}

exports.addLeg = async (leg) => {
    return (new Leg(leg)).save();
}

exports.updateLeg = async (id, leg) => {
    const { ...updateData } = leg;
    const update = await Leg.findByIsAndUpdate(id, updateData, { new: true});
    return update;
}

exports.deleteLeg = async (id) => {
    const leg = await Leg.findByIsAndRemove(id);
    return leg;
}

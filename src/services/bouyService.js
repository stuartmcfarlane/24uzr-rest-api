const boom = require('boom');
const Bouy = require('../models/Bouy');

exports.getBouys = async (query = {}) => {
    const bouys = await Bouy.find(query);
    return bouys;
}

exports.getBouy = async (id) => {
    const bouy = await Bouy.findById(id);
    return bouy;
}

exports.addBouy = async (bouy) => {
    return (new Bouy(bouy)).save();
}

exports.updateBouy = async (id, bouy) => {
    const { ...updateData } = bouy;
    const update = await Bouy.findByIdAndUpdate(id, updateData, { new: true});
    return update;
}

exports.deleteBouy = async (id) => {
    const bouy = await Bouy.findByIdAndRemove(id);
    return bouy;
}

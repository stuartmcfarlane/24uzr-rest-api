const boom = require('boom');
const Bouy = require('../models/Bouy');

exports.getBouys = async (query = {}) => {
    console.log(query)
    const bouys = await Bouy.find(query);
    return bouys;
}

exports.getBouy = async (id) => {
    const bouy = await Bouy.find({ _id: id });
    return bouy;
}

exports.addBouy = async (bouy) => {
    return (new Bouy(bouy)).save();
}

exports.updateBouy = async (id, bouy) => {
    const { ...updateData } = bouy;
    const update = await Bouy.findByIsAndUpdate(id, updateData, { new: true});
    return update;
}

exports.deleteBouy = async (id) => {
    const bouy = await Bouy.findByIsAndRemove(id);
    return bouy;
}

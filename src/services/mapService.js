const boom = require('boom');
const Map = require('../models/Map');

exports.getMaps = async (query = {}) => {
    const maps = await Map.find(query);
    return maps;
}

exports.getMap = async (id) => {
    const map = await Map.find({_id:id});
    return map;
}

exports.addMap = async (map) => {
    return (new Map(map)).save();
}

exports.updateMap = async (id, map) => {
    const { ...updateData } = map;
    const update = await Map.findByIsAndUpdate(id, updateData, { new: true});
    return update;
}

exports.deleteMap = async (id) => {
    const map = await Map.findByIsAndRemove(id);
    return map;
}

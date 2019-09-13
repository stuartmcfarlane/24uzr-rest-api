const boom = require('boom');
const Ship = require('../models/Ship');

exports.getShips = async (req, reply) => {
    try {
        const ships = await Ship.find();
        return ships;
    } catch (err) {
        throw boom.boomify(err);
    }
}

exports.getShip = async (req, reply) => {
    try {
        const id = req.params.id;
        const ship = await Ship.find(id);
        return ships;
    } catch (err) {
        throw boom.boomify(err);
    }
}

exports.addShip = async (req, reply) => {
    try {
        const ship = new Ship(req.body);
        return ship.save();
    } catch (err) {
        throw boom.boomify(err);
    }
}

exports.updateShip = async (req, reply) => {
    try {
        const id = req.params.id;
        const ship = req.body;
        const { ...updateData } = ship;
        const update = await Ship.findByIsAndUpdate(id, updateData, { new: true});
        return update;
    } catch (err) {
        throw boom.boomify(err);
    }
}

exports.deleteShip = async (req, reply) => {
    try {
        const id = req.params.id;
        const ship = await Ship.findByIsAndRemove(id);
        return ship;
    } catch (err) {
        throw boom.boomify(err);
    }
}

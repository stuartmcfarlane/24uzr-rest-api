const boom = require('boom');
const Ship = require('../models/Ship');

exports.getShips = async () => {
    const ships = await Ship.find();
    return ships;
}

exports.getShip = async (id) => {
    const ship = await Ship.find({_id:id});
    return ship;
}

exports.addShip = async (ship) => {
    return (new Ship(ship)).save();
}

exports.updateShip = async (id, ship) => {
    const { ...updateData } = ship;
    const update = await Ship.findByIsAndUpdate(id, updateData, { new: true});
    return update;
}

exports.deleteShip = async (id) => {
    const ship = await Ship.findByIsAndRemove(id);
    return ship;
}

exports.knotsVMG = (ship, shipDegrees, windKnots, windDegrees)  => {
    return 5;
}
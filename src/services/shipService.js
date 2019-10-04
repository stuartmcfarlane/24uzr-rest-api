const boom = require('boom');
const Ship = require('../models/Ship');

exports.getShips = async () => {
    const ships = await Ship.find();
    return ships;
}

exports.getShip = async (id) => {
    const ship = await Ship.findById(id);
    console.log('got ship', ship)
    return ship;
}

exports.addShip = async (ship) => {
    return (new Ship(ship)).save();
}

exports.updateShip = async (id, ship) => {
    const { ...updateData } = ship;
    const update = await Ship.findByIdAndUpdate(id, updateData, { new: true});
    return update;
}

exports.deleteShip = async (id) => {
    const ship = await Ship.findByIdAndRemove(id);
    return ship;
}

exports.knotsVMG = (ship, shipDegrees, windKnots, windDegrees)  => {
    windKnots = Math.round(windKnots);
    shipDegrees = Math.round(shipDegrees + 360) % 360;
    windDegrees = Math.round(windDegrees + 360) % 360;
    const maybeDegrees = (shipDegrees + windDegrees) % 360;
    const degrees = maybeDegrees > 180
                  ? 360 - maybeDegrees
                  : maybeDegrees;

    const kk = Object.keys(ship.speed).map(Number).filter(Number.isInteger);

    let speeds = {};

    for (k of kk) {
        speeds = ship.speed[k];
        if (k === windKnots) {
            break;
        }
    }
    let a = b = -1;
    let v = w = 0;
    const dd = Object.keys(speeds).map(Number).filter(Number.isInteger);
    let vmg = 0;
    for (b of dd) {
        w = speeds[b];
        if (a === -1) {
            a = b;
            v = w;
            continue;
        }
        if (degrees < b) {
            vmg = v + ((degrees - a) * (w - v)) / (b - a);
            break;
        }
        a = b;
        v = w;
    }
    console.log('vmg', windKnots, shipDegrees, windDegrees, vmg)
    return vmg;
}
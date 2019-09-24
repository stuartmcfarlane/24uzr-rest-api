const legService = require('./legService');
const bouyService = require('./bouyService');
const windService = require('./windService');
const shipService = require('./shipService');
const axios = require('axios');

exports.getRoutes = async (shipId, mapId, start, end) => {
    console.log('getRoutes for ship', shipId)
    const [
        ship,
        legs,
        bouys,
        wind
    ] = await Promise.all([
        shipService.getShip(shipId),
        legService.getLegs({mapId}),
        bouyService.getBouys({mapId}),
        windService.getWind({mapId})
    ]);
    const bouysById = bouys.reduce( (bouysById,bouy) => {
        bouysById[bouy._id] = bouy;
        return bouysById;
    }, {})
    const graph = {
        edges: legs.map( (leg) => {
            const start = bouysById[leg.start];
            const end = bouysById[leg.end];
            const metres = getMetres(start.location, end.location);
            const metresPerSecondSE = getMetresPerSecondVMG(
                    ship, wind, start.location, end.location
                );
            const metresPerSecondES = getMetresPerSecondVMG(
                    ship, wind, end.location, start.location
                );
            return {
                start: leg.start._id,
                end: leg.end._id,
                metres,
                metresPerSecondSE,
                metresPerSecondES,
            }
        })
    };
    
    const res = await axios.post(`http://localhost:3002/route/all?start=${start}&end=${end}`, graph);
    const foundRoutes = res.data;
    console.log('got', foundRoutes)
    const routes = {
        start: foundRoutes.Start,
        end: foundRoutes.End,
        paths: foundRoutes.Paths.map(path => {
            return {
                length: path.Metres,
                bouys: path.Nodes,
            }
        })
    }
    return routes;
}

const getMetres = (start, end) => {
    return distanceLatLan(start.lat, start.lon, end.lat, end.lon);
}
const getMetresPerSecondVMG = (ship, wind, start, end) => {
    const windAtStart = windService.windAtLocation(start);
    const shipDegrees = bearingLatLan(start.lat, start.lon, end.lat, end.lon);
    const knotsVMG = shipService.knotsVMG(ship, shipDegrees, windAtStart.knots, windAtStart.degrees);
    return knots2metersPerSecond(knotsVMG);
}

const toRadians = function(d) { return d * Math.PI / 180; };
const toDegrees = function(r) { return r * 180 / Math.PI; };

function distanceLatLan(lat1, lon1, lat2, lon2) {
    var R = 6371e3; // metres
    var φ1 = toRadians(lat1);
    var φ2 = toRadians(lat2);
    var Δφ = toRadians(lat2-lat1);
    var Δλ = toRadians(lon2-lon1);

    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    var d = R * c;
    return d;
}

function bearingLatLan(lat1, lon1, lat2, lon2) {
    var φ1 = toRadians(lat1);
    var φ2 = toRadians(lat2);
    var Δλ = toRadians(lon2-lon1);
    var y = Math.sin(Δλ) * Math.cos(φ2);
    var x = Math.cos(φ1)*Math.sin(φ2) -
            Math.sin(φ1)*Math.cos(φ2)*Math.cos(Δλ);
    var brng = toDegrees(Math.atan2(y, x));
    return brng;
}

function knots2metersPerSecond(knots) {
    return knots + 0.514444;
}


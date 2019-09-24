const legService = require('./legService');
const bouyService = require('./bouyService');
const axios = require('axios');

exports.getRoutes = async (mapId, start, end) => {
    const [legs, bouys] = await Promise.all([legService.getLegs({mapId}), bouyService.getBouys({mapId})]);
    const bouysById = bouys.reduce( (bouysById,bouy) => {
        bouysById[bouy._id] = bouy;
        return bouysById;
    }, {})
    const graph = {
        edges: legs.map( (leg) => {
            return {
                start: leg.start._id,
                end: leg.end._id,
                weight: 1,
                weightSE: getWeight(bouysById[leg.start].location, bouysById[leg.end].location),
                weightES: getWeight(bouysById[leg.end].location, bouysById[leg.start].location),
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
                length: path.Weight,
                bouys: path.Nodes,
            }
        })
    }
    return routes;
}

function getWeight(start, end) {
    // weight in both directions is leg length
    console.log('start', start)
    console.log('end', end)
    return distanceLatLan(start.lat, start.lon, end.lat, end.lon);
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
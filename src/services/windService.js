exports.getWind = async (mapId) => {
    const wind = {};
    return wind;
}

exports.windAtLocation = (location) => {
    return {
        location,
        knots: 10,
        degrees: 45
    }
}

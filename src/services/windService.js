exports.getWind = async (mapId) => {
    const wind = {};
    return wind;
}

exports.windAtLocation = (wind, location) => {
    return {
        location,
        ...wind,
    }
}

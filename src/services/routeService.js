const legService = require('./legService');
const axios = require('axios');

exports.getRoutes = async (start, end) => {
    const legs = await legService.getLegs();
    const graph = {
        edges: legs.map( (leg) => {
            return {
                start: leg.start._id,
                end: leg.end._id,
                weight: 1,
            }
        })
    };
    const res = await axios.post(`http://localhost:3002/route/shortest?start=${start}&end=${end}`, graph);
    const routes = res.data;
    console.log('got', routes)
    return routes;
}


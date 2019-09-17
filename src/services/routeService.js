const boom = require('boom');

exports.getRoutes = async (req, reply) => {
    try {
        console.log('req',req)
        const params = req.query;
        console.log('params',params)
        // const routes = await Route.find();
        return {routes: []};
    } catch (err) {
        throw boom.boomify(err);
    }
}


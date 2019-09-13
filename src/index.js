const fastify = require('fastify')({
    logger: true
});

const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost/24uzr',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then( () => fastify.log.info('mongodb 24uzr connected...') )
    .catch( err => fastify.log.error(err) )
;

const swagger = require('./config/swagger');
const fastifySwagger = require('fastify-swagger');
fastify.register(fastifySwagger, swagger.options);

const routes = require('./routes');
routes.forEach( (route, index) => {
    fastify.route(route);
});

const start = async () => {
    try {
        await fastify.listen(3001);
        fastify.log.info(`24uzr-rest-api listening on ${fastify.server.address().port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
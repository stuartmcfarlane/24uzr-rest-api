exports.options = {
  mode: 'dynamic',
  routePrefix: '/documentation',
  exposeRoute: true,
  swagger: {
    info: {
      title: '24uzr REST API',
      description: 'Rest API for 24uzr application',
      version: '1.0.0'
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here'
    },
    host: 'localhost:3000',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  }
};
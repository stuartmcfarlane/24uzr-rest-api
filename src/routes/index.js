const bouyController = require('../controllers/bouyController');
const legController = require('../controllers/legController');
const shipController = require('../controllers/shipController');
const mapController = require('../controllers/mapController');
const routeController = require('../controllers/routeController');
const windController = require('../controllers/windController');

const routes = [
  //
  // bouys
  //
  {
    method: 'GET',
    url: '/api/bouys',
    handler: bouyController.getBouys
  },
  {
    method: 'GET',
    url: '/api/bouys/:id',
    handler: bouyController.getBouy
  },
  {
    method: 'POST',
    url: '/api/bouys',
    handler: bouyController.addBouy
  },
  {
    method: 'PUT',
    url: '/api/bouys/:id',
    handler: bouyController.updateBouy
  },
  {
    method: 'DELETE',
    url: '/api/bouys/:id',
    handler: bouyController.deleteBouy
  },
  //
  // legs
  //
  {
    method: 'GET',
    url: '/api/legs',
    handler: legController.getLegs
  },
  {
    method: 'GET',
    url: '/api/legs/:id',
    handler: legController.getLeg
  },
  {
    method: 'POST',
    url: '/api/legs',
    handler: legController.addLeg
  },
  {
    method: 'PUT',
    url: '/api/legs/:id',
    handler: legController.updateLeg
  },
  {
    method: 'DELETE',
    url: '/api/legs/:id',
    handler: legController.deleteLeg
  },
  //
  // ships
  //
  {
    method: 'GET',
    url: '/api/ships',
    handler: shipController.getShips
  },
  {
    method: 'GET',
    url: '/api/ships/:id',
    handler: shipController.getShip
  },
  {
    method: 'POST',
    url: '/api/ships',
    handler: shipController.addShip
  },
  {
    method: 'PUT',
    url: '/api/ships/:id',
    handler: shipController.updateShip
  },
  {
    method: 'DELETE',
    url: '/api/ships/:id',
    handler: shipController.deleteShip
  },
  //
  // maps
  //
  {
    method: 'GET',
    url: '/api/maps',
    handler: mapController.getMaps
  },
  {
    method: 'GET',
    url: '/api/maps/:id',
    handler: mapController.getMap
  },
  {
    method: 'POST',
    url: '/api/maps',
    handler: mapController.addMap
  },
  {
    method: 'PUT',
    url: '/api/maps/:id',
    handler: mapController.updateMap
  },
  {
    method: 'DELETE',
    url: '/api/maps/:id',
    handler: mapController.deleteMap
  },
  //
  // routes
  //
  {
    method: 'GET',
    url: '/api/routes',
    handler: routeController.getRoutes
  },
  //
  // wind
  //
  {
    method: 'GET',
    url: '/api/wind',
    handler: windController.getWind
  },
];

module.exports = routes;

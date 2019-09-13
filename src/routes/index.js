const bouyController = require('../controllers/bouyController');
const legController = require('../controllers/legController');

const routes = [
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
  }
];

module.exports = routes;

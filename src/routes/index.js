const bouyController = require('../controllers/bouyController');

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
  }
];

module.exports = routes;

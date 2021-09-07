const routes = require('express').Router();

const RestaurantController = require('./controller/restaurant');
const ReserveController = require('./controller/reserve');

routes.post('/restaurantes', RestaurantController.create);
routes.post('/restaurantes/lista', RestaurantController.deleteRestaurant);
routes.post('/restaurantes/editar', RestaurantController.updateRestaurant);

routes.get('/restaurantes/lista/nombres', RestaurantController.getSortedNames);
routes.get('/restaurantes/lista/ciudades', RestaurantController.getSortedCities);

routes.post('/reservas', ReserveController.createReserve);
routes.get('/reservas/lista', ReserveController.listAllReserves);

module.exports = routes;
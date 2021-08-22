const RestaurantServices = require('../services/restaurantService');

const restaurantController = module.exports;

restaurantController.create = async (req, res, next) => {
    const data = req.body;
    return RestaurantServices.create(data).then(result => res.status(result.status).send(result.message))
        .catch(() => res.status(500).send('Internal server error'));

};

restaurantController.deleteRestaurant = async (req, res, next) => {
    const { restaurantName } = req.body;
    return RestaurantServices.deleteByName(restaurantName).then(result => res.status(result.status).send(result.message))
        .catch(() => res.status(500).send('Internal server error'));
};

restaurantController.getSortedNames = async (req, res, next) => {
    const { sorted } = req.query;
    return RestaurantServices.getSortedNames(sorted).then(result => res.status(result.status).send(result.message))
        .catch(() => res.status(500).send('Internal server error'));
};

restaurantController.getSortedCities = async (req, res, next) => {
    const { sorted } = req.query;
    return RestaurantServices.getSortedCities(sorted).then(result => res.status(result.status).send(result.message))
        .catch(() => res.status(500).send('Internal server error'));
};

restaurantController.updateRestaurant = async (req, res, next) => {
    const data = req.body;
    return RestaurantServices.editRestaurtants(data).then(result => res.status(result.status).send(result.message))
        .catch(() => res.status(500).send('Internal server error'));

};




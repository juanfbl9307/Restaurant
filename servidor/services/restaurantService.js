const Restaurants = require('../repositories/restaurants');

const RestaurantService = module.exports;

RestaurantService.create = async (data) => {
    await Restaurants.create(data);
    creation = {
        message: 'Restaurante creado exitosamente',
        status: 200
    }
    return creation;
};

RestaurantService.deleteByName = async (restaurantName) => {
    const response = await Restaurants.delete(restaurantName);
    return result = {
        message: response,
        status: 200
    }
};

RestaurantService.getSortedNames = async (sorted) => {
    const response = await Restaurants.getNames(sorted);
    result = {
        status: 200,
        message: response
    };
    return result
};

RestaurantService.getSortedCities = async (sorted) => {
    const response = await Restaurants.getSortedByCity(sorted);
    result = {
        status: 200,
        message: response
    };
    return result
};

RestaurantService.editRestaurtants = async (data) => {
    const response = await Restaurants.update(data);
    result = {
        status: 200,
        message: response
    };
    return result
};




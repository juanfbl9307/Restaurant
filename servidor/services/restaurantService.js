const Restaurants = require('../repositories/restaurants');
const Reserves = require('../repositories/reserves');
const id = require('uuid');

const RestaurantService = module.exports;

RestaurantService.create = async (data) => {
    const { restaurantName, restaurantDescription, restaurantAddress, restaurantCity, restaurantImgURL } = data;
    const restaurantIdByName = await Reserves.getRestaurantIdByName(restaurantName);

    if (restaurantIdByName) {
        creation = {
            message: 'Restaurante ya existe',
            status: 400
        };
        return creation
    };

    const restaurantId = id.v4();
    const restaurantCreated = await Restaurants.create(restaurantId, restaurantName, restaurantDescription, restaurantAddress, restaurantCity, restaurantImgURL);
    if (restaurantCreated) {
        creation = {
            message: 'Restaurante creado exitosamente',
            status: 200
        };
        return creation
    } else {
        creation = {
            message: 'Error en el servidor',
            status: 500
        };
        return creation
    }
};

RestaurantService.deleteByName = async (restaurantName) => {
    const restaurantIdByName = await Reserves.getRestaurantIdByName(restaurantName);
    if (!restaurantIdByName) {
        creation = {
            message: `Restaurante ${restaurantName} no existe`,
            status: 400
        };
        return creation
    };
    const restaurantDeletion = await Restaurants.delete(restaurantName);
    if (restaurantDeletion) {
        creation = {
            message: `Restaurante ${restaurantName} eliminado`,
            status: 200
        }
        return creation;
    } else {
        creation = {
            message: 'Error en el servidor',
            status: 500
        };
        return creation;
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
    const { restaurantName, restaurtantNewName, restaurantDescription, restaurantAddress, restaurantCity, restaurantImgURL } = data;
    const restaurantIdByName = await Reserves.getRestaurantIdByName(restaurantName);
    if (!restaurantIdByName) {
        creation = {
            message: `Restaurante ${restaurantName} no existe`,
            status: 400
        };
        return creation
    };
    const response = await Restaurants.update(restaurantName, restaurtantNewName, restaurantDescription, restaurantAddress, restaurantCity, restaurantImgURL);
    if (response) {
        result = {
            status: 200,
            message: `Datos de restaurante ${restaurantName} actualizados`
        };
        return result;
    } else {
        result = {
            status: 500,
            message: `Internal server error`
        };
        return result;
    }

};




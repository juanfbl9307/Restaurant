const mysql = require('../lib/mysql');

const database = mysql;
const table = 'restaurants';
const Restaurant = module.exports;

Restaurant.create = async (restaurantId, restaurantName, restaurantDescription, restaurantAddress, restaurantCity, restaurantImgURL) => {
    const createRestaurant = await database.create(table, restaurantId, restaurantName, restaurantDescription, restaurantAddress, restaurantCity, restaurantImgURL);
    return createRestaurant;
};

Restaurant.delete = async (restaurantName) => {
    const deleteRestaurant = await database.deleteByName(table, restaurantName);
    return deleteRestaurant;
};

Restaurant.getNames = async (sorted) => {
    const getSortedNames = await database.getSortByName(table, sorted);
    return getSortedNames;
};

Restaurant.getSortedByCity = async (sorted) => {
    const getCities = await database.getSortByCity(table, sorted);
    return getCities;
};

Restaurant.update = async (restaurantName, restaurtantNewName, restaurantDescription, restaurantAddress, restaurantCity, restaurantImgURL) => {
    const updateRestaurants = await database.updateRestaurant(table, restaurantName, restaurtantNewName, restaurantDescription, restaurantAddress, restaurantCity, restaurantImgURL);
    return updateRestaurants;
};
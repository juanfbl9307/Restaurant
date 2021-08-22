const mysql = require('../lib/mysql');

const database = mysql;
const table = 'restaurants';
const Restaurant = module.exports;

Restaurant.create = async (restaurantData) => {
    const createRestaurant = await database.create(table, restaurantData);
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

Restaurant.update = async (data) => {
    const updateRestaurants = await database.updateRestaurant(table, data);
    return updateRestaurants;
}





/*

Restaurant.edit

 */

const mysql = require('../lib/mysql');

const database = mysql;
const table = 'reserves';
const Reserves = module.exports;

Reserves.reserve = async (reserveNum, restaurantId, date, restaurantName) => {
    const createReserve = await database.makeReserve(table, reserveNum, restaurantId, date, restaurantName);
    return createReserve;
};


Reserves.listReserves = async () => {
    const listAllReserves = await database.listReserves(table);
    return listAllReserves;
};

Reserves.reservesCount = async (date) => {
    const numbertOfReserves = await database.listByDate(table, date);
    return numbertOfReserves;
};

Reserves.reservesRestaurantCount = async (restaurantId, date) => {
    const reservesRestaurant = await database.listRestaurantDate(table, restaurantId, date);
    return reservesRestaurant;
};

Reserves.getRestaurantIdByName = async (restaurantName) => {
    const reservesRestaurant = await database.getRestaurantId(restaurantName);
    return reservesRestaurant;
};




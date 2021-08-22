const dotenv = require('dotenv');
dotenv.config();

const host = `http://localhost:3001`;

console.log(host)


const createRestaurant = `${host}/restaurantes`;
const deleteRestaurant = `${host}/restaurantes/lista`;
const listRestaurantsByName = `${host}/restaurantes/lista/nombres?sorted=ASC`;
const listRestaurantsByNameDesc = `${host}/restaurantes/lista/nombres?sorted=DESC`;
const listRestaurantsByCity = `${host}/restaurantes/lista/ciudades?sorted=ASC`;
const listRestaurantsByCityDesc = `${host}/restaurantes/lista/ciudades?sorted=DESC`;


const makeReserve = `${host}/reservas`;
const listReserves = `${host}/reservas/lista`;

module.exports = { createRestaurant, deleteRestaurant, listRestaurantsByName, listRestaurantsByCity, makeReserve, listReserves, listRestaurantsByCityDesc, listRestaurantsByNameDesc }

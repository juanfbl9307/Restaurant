const host = "http://localhost:3001";

console.log(process.env)


const createRestaurant = `${host}/restaurantes`;
const deleteRestaurant = `${host}/restaurantes/lista`;
const modifyRestaurant = `${host}/restaurantes/editar`;
const listRestaurantsByName = `${host}/restaurantes/lista/nombres?sorted=ASC`;
const listRestaurantsByNameDesc = `${host}/restaurantes/lista/nombres?sorted=DESC`;
const listRestaurantsByCity = `${host}/restaurantes/lista/ciudades?sorted=ASC`;
const listRestaurantsByCityDesc = `${host}/restaurantes/lista/ciudades?sorted=DESC`;


const makeReserve = `${host}/reservas`;
const listReserves = `${host}/reservas/lista`;

module.exports = { modifyRestaurant, createRestaurant, deleteRestaurant, listRestaurantsByName, listRestaurantsByCity, makeReserve, listReserves, listRestaurantsByCityDesc, listRestaurantsByNameDesc }

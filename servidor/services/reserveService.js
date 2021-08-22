const Reserves = require('../repositories/reserves');

const ReserveService = module.exports;
const maxReservesTotal = 20;
const maxReservesRestaurant = 15;

ReserveService.makeReserve = async (restaurantName, date) => {
    const restaurantIdByName = await Reserves.getRestaurantIdByName(restaurantName);
    const reserveNumber = await Reserves.reservesCount(date);
    const reservesRestaurant = await Reserves.reservesRestaurantCount(restaurantIdByName, date);
    if (reserveNumber >= maxReservesTotal) {
        result = {
            status: 400,
            message: 'Numero maximo de reserveas diarias alcanzado, prueba otra fecha'
        };
        return result;
    } else if (reservesRestaurant >= maxReservesRestaurant) {
        result = {
            status: 400,
            message: 'Numero maximo de reserveas diarias para este restaurante alcanzado, prueba otra fecha u otro restaurante'
        };
        return result;
    }
    if (!restaurantIdByName) {
        result = {
            status: 400,
            message: "No existe ese restaurante"
        };
        return result;

    };
    const reserveNum = (reservesRestaurant + 1);

    const response = await Reserves.reserve(reserveNum, restaurantIdByName, date, restaurantName);
    result = {
        status: 200,
        message: { response, reserveNumber }
    };
    return result;

};

ReserveService.getAllReserves = async () => {
    const response = await Reserves.listReserves();
    result = {
        status: 200,
        message: response
    };
    return result;
};

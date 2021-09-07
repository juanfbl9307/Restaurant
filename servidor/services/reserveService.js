const Reserves = require('../repositories/reserves');

const ReserveService = module.exports;
const maxReservesTotal = 20;
const maxReservesRestaurant = 15;

ReserveService.makeReserve = async (restaurantName, date, numeroDeReservas) => {
    const restaurantIdByName = await Reserves.getRestaurantIdByName(restaurantName);
    const reserveNumber = await Reserves.reservesCount(date);
    const reservesRestaurant = await Reserves.reservesRestaurantCount(restaurantIdByName, date);
    const reserveNumtTotal = (reserveNumber + numeroDeReservas);
    const reserveNum = (reservesRestaurant + numeroDeReservas);
    if (reserveNumtTotal > maxReservesTotal) {
        result = {
            status: 400,
            message: 'Numero maximo de reserveas diarias alcanzado, prueba otra fecha'
        };
        return result;
    } else if (reserveNum > maxReservesRestaurant) {
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
    for (let i = reservesRestaurant + 1; i < reserveNum + 1; i++) {
        await Reserves.reserve(i, restaurantIdByName, date, restaurantName);
    }

    result = {
        status: 200,
        message: `Reserva en el restaurante: ${restaurantName} ,numero ${reserveNumtTotal} exitosa`
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

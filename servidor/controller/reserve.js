const ReserveService = require('../services/reserveService');

const reserveController = module.exports;

reserveController.createReserve = async (req, res, next) => {
    const { restaurantName, date, numeroDeReservas } = req.body;
    return ReserveService.makeReserve(restaurantName, date, numeroDeReservas).then(result => res.status(result.status).send(result.message))
        .catch(() => res.status(500).send('Internal server error'));

};

reserveController.listAllReserves = async (req, res, next) => {
    return ReserveService.getAllReserves().then(result => res.status(result.status).send(result.message))
        .catch(() => res.status(500).send('Internal server error'));

};
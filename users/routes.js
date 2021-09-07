const routes = require('express').Router();

const UserController = require('./controller/user');
const authentication = require('./auth/index');

routes.post('/users/create', UserController.create);
routes.get('/users/list', authentication.verifyToken, UserController.allUserlist);
routes.get('/login', authentication.login)


module.exports = routes;

import express from 'express';

const route = express.Router();
const loginController = require('../use cases/user/login_use_case/controller');
const logoutController = require('../use cases/user/logout/controller');
const createController = require('../use cases/user/create_use_case/controller');

route.use('/user', loginController);
route.use('/user', logoutController);
route.use('/user', createController);

module.exports = route;
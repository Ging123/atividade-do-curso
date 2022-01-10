import express from 'express';

const route = express.Router();
const createController = require('../use cases/order/create/controller');
const getAllController = require('../use cases/order/get_all/controller');

route.use(createController);
route.use(getAllController);

module.exports = route;
import express from 'express';

const route = express.Router();
const createController = require('../use cases/worker/create/controller');
const getAllController = require('../use cases/worker/getAll/controller');

route.use(createController);
route.use(getAllController);

module.exports = route;
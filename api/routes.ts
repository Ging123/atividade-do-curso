import express from 'express';

const route = express.Router();
const userRoutes = require('./src/routes/userRoutes');
const orderRoutes = require('./src/routes/orderRoutes');
const workerRoutes = require('./src/routes/workerRoutes');

route.use('/user', userRoutes);
route.use('/order', orderRoutes);
route.use('/worker', workerRoutes);

export default route; 
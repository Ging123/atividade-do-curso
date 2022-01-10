import express from 'express';

const route = express.Router();
const userRoutes = require('./src/routes/userRoutes');
const orderRoutes = require('./src/routes/orderRoutes');

route.use('/user', userRoutes);
route.use('/order', orderRoutes);

export default route; 
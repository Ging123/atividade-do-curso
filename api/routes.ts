import express from 'express';

const route = express.Router();
const userRoute = require('./src/routes/userRoutes');

route.use(userRoute);

export default route; 
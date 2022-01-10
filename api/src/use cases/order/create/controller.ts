import express from 'express';
import { verifyIfIsAnInternalException } from '../../../utils/exceptions';
import OrderCreateUseCase from './useCase';

const route = express.Router();
const order = new OrderCreateUseCase();

route.post('/', async (req, res) => {
  try {
    const { name, color, metric, material, image } = req.body;
    const orderCreated = await order.create({
      name:name,
      color:color,
      metric:metric,
      material:material,
      image:image
    });
    res.status(201).json(orderCreated);
  }
  catch(err:any) {
    err = verifyIfIsAnInternalException(err);
    res.status(err.status).json(err.message);
  }
});

module.exports = route;
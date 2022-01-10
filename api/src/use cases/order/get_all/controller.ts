import { verifyIfIsAnInternalException } from '../../../utils/exceptions';
import express from 'express';
import authUser, { authAdmin } from '../../../middlewares/auth';
import OrderRepository from '../../../repositories/orderRepository';

const route = express.Router();
const order = new OrderRepository();

route.get('/all', authUser, authAdmin, async (req, res) => {
  try {
    const ordersFound = await order.findAll();
    res.status(200).json(ordersFound);
  }
  catch(err:any) {
    err = verifyIfIsAnInternalException(err);
    res.status(err.status).json(err.message);
  }
});

module.exports = route;
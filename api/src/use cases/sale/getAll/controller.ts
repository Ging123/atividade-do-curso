import express from 'express';
import authUser, { authAdmin } from '../../../middlewares/auth';
import SaleRepository from '../../../repositories/saleRepository';
import { verifyIfIsAnInternalException } from '../../../utils/exceptions';

const route = express.Router();
const sale = new SaleRepository();

route.get('/', authUser, authAdmin, async (req, res) => {
  try {
    const allSales = await sale.findAll();
    res.status(200).json(allSales);
  }
  catch(err:any) {
    err = verifyIfIsAnInternalException(err);
    res.status(err.status).json(err.message);
  }
});

module.exports = route;
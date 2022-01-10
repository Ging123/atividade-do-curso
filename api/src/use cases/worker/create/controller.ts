import express from 'express';
import WorkerCreateUseCase from './useCase';
import authUser, { authAdmin } from '../../../middlewares/auth';
import verifyIfIsAnInternalException from '../../../utils/exceptions';

const route = express.Router();
const worker = new WorkerCreateUseCase();

route.post('/', authUser, authAdmin, async (req, res) => {
  try {
    const { name, furniture } = req.body;
    const workerCreated = await worker.create({
      name:name,
      furniture:furniture
    });
    res.status(201).json(workerCreated);
  }
  catch(err:any) {
    err = verifyIfIsAnInternalException(err);
    res.status(err.status).json(err.message);
  }
});

module.exports = route;
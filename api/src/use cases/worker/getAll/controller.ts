import express from 'express';
import authUser, { authAdmin } from '../../../middlewares/auth';
import WorkerRepository from '../../../repositories/workerRepository';
import { verifyIfIsAnInternalException } from '../../../utils/exceptions';

const route = express.Router();
const worker = new WorkerRepository();

route.get('/', authUser, authAdmin, async (req, res) => {
  try {
    const allWorkers = await worker.findAll();
    res.status(200).json(allWorkers);
  }
  catch(err:any) {
    err = verifyIfIsAnInternalException(err);
    res.status(err.status).json(err.message);
  }
});

module.exports = route;
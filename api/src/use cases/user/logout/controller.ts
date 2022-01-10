import express from 'express';
import authUser from '../../../middlewares/auth';
import { verifyIfIsAnInternalException } from '../../../utils/exceptions';

const route = express.Router();

route.delete('/logout', authUser, async (req:any, res) => {
  try {
    req.session.destroy();
    res.status(204).send(); 
  }
  catch(err:any) {
    err = verifyIfIsAnInternalException(err);
    res.status(err.status).json(err.message);
  }
});

module.exports = route;
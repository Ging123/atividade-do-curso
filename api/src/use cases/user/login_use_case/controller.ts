import express from 'express';
import { verifyIfIsAnInternalException } from '../../../utils/exceptions';
import UserLoginUseCase from './useCase';

const route = express.Router();
const user = new UserLoginUseCase();

route.post('/login', async (req:any, res) => {
  try {
    const { username, password } = req.body; 
    const userData = await user.login({
      username:username,
      password:password
    });
    req.session.user = userData;
    res.status(201).json({
      username:req.session.user.username
    });
  }
  catch(err:any) {
    const error = verifyIfIsAnInternalException(err);
    res.status(error.status).json(error.message);
  }
})

module.exports = route;
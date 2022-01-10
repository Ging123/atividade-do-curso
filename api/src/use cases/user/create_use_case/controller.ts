import express from 'express';
import { verifyIfIsAnInternalException } from '../../../utils/exceptions';
import UserCreateUseCase from './useCase';

const route = express.Router();
const user = new UserCreateUseCase();

route.post('/', async (req, res) => {
  try {
    const { username, password } = req.body;
    await user.create({
      username:username,
      password:password
    });
    res.status(201).send();
  }
  catch(err) {
    const error = verifyIfIsAnInternalException(err);
    res.status(error.status).json(error.message);
  }
});

module.exports = route;
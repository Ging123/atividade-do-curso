import { user } from "../../../models/userModel";
import UserRepository from "../../../repositories/userRepository";
import exception from '../../../utils/exceptions';
import bcrypt from 'bcrypt';

class UserLoginUseCase {

  private user = new UserRepository();
  
  public async login(user:user) {
    const userFound = await this.getUserByUsername(user.username);
    await this.verifyIfPasswordMatchTheUser(userFound.password, user.password);
    return userFound;
  }

  private async getUserByUsername(username:string) {
    const userDoesntExists = 'Esse nome não existe no sistema';
    const user = await this.user.findOneByUsername(username);
    if(!user) throw exception(userDoesntExists);
    return user;
  }

  private async verifyIfPasswordMatchTheUser(hashPassword:string, typedPassword:string) {
    const wrongPassword = 'Senha digitada errada';
    typedPassword += process.env.SALT_SECRET!;
    const match = await bcrypt.compare(typedPassword, hashPassword);
    if(!match) throw exception(wrongPassword);
  }
}

export default UserLoginUseCase;
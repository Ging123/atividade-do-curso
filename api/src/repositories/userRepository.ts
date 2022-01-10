import bcrypt from 'bcrypt';
import UserModel, { user } from '../models/userModel';

class UserRepository extends UserModel {

  public async create(userData:user) {
    const user = this.createNewUser(userData);
    await this.encryptPassword(user);
    await user.save();
    return user;
  }

  private async encryptPassword(user:any) {
    await bcrypt.hash(user.password + process.env.SALT_SECRET!, 10)
    .then((encryptPassword:string) => user.password = encryptPassword);
  }

  public async findOneByUsername(username:string) {
    return await this.userModel.findOne({username:username});
  }
}

export default UserRepository;
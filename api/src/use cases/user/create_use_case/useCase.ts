import { user } from "../../../models/userModel";
import UserRepository from "../../../repositories/userRepository";

class UserCreateUseCase {

  private user = new UserRepository();

  public async create(user:user) {
    this.validateUsername(user.username);
    this.validatePassword(user.password);
    await this.user.create(user);
  }

  private validateUsername(username:string) {
    const emptyUsername = 'Nome de usuário não foi preenchido';
    const nameTooBig = 'Nome de usuário deve ter no máximo 30 caracteries';
    if(!username) throw exception(emptyUsername);
    if(username.length > 30) throw exception(nameTooBig);
  }

  private validatePassword(password:string) {
    const emptyPassword = 'Senha não foi preenchida';
    const passwordTooBig = 'Senha deve ter no máximo 30 caracteries';
    const passwordTooSmall = 'Senha deve ter no mínimo 7 caracteries';
    if(!password) throw exception(emptyPassword);
    if(password.length > 30) throw exception(passwordTooBig);
    if(password.length < 7) throw exception(passwordTooSmall);
  }
}

export default UserCreateUseCase;

function exception(emptyUsername: string) {
  throw new Error("Function not implemented.");
}

import { worker } from "../../../models/workerModel";
import WorkerRepository from "../../../repositories/workerRepository";
import OrderRepository from '../../../repositories/orderRepository';
import exception from '../../../utils/exceptions';

class WorkerCreateUseCase {

  private worker = new WorkerRepository();
  private order = new OrderRepository();

  public async create(worker:worker) {
    await this.validate(worker);
    return await this.worker.create(worker);
  }

  private async validate(worker:worker) {
    this.validateName(worker.name);
    await this.validateFurniture(worker.furniture);
  }

  private validateName(name:string) {
    const emptyName = 'Nome do funcionario não foi preenchido';
    const nameTooBig = 'Nome do funcionário deve ter no máximo 30 caracteries';
    if(!name) throw exception(emptyName);
    if(name.length > 30) throw exception(nameTooBig);
  }

  private async validateFurniture(furniture = '') {
    const furnitureTooBig = 'Nome do produto muito grande';
    if(furniture.length > 100) throw exception(furnitureTooBig);
    if(furniture !== '') await this.verifyIfFurnitureExists(furniture);
  }

  private async verifyIfFurnitureExists(furniture:string) {
    const furnitureDoesntExists = 'Não existe esse movel registrado';
    const order = await this.order.findByNameAOrderToWork(furniture);
    if(!order) throw exception(furnitureDoesntExists);
  }
}

export default WorkerCreateUseCase;
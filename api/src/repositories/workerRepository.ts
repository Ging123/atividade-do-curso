import WorkerModel, { worker } from '../models/workerModel';

class WorkerRepository extends WorkerModel {

  public async create(workerData:worker) {
    const worker = this.createNewWorker(workerData);
    await worker.save();
    return worker;
  }

  public async findAll() {
    return await this.workerModel.find({});
  }
}

export default WorkerRepository;
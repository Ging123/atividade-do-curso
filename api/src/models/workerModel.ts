import mongoose from "mongoose";
const Schema = mongoose.Schema;

export interface worker {
  name:string;
  furniture:string;
}

class WorkerModel {

  private readonly workerSchema = new Schema({
    name: {
      type:String,
      required:true,
      maxLength:30,
      index:true
    },
    furniture: {
      type:String,
      index:true,
      maxlength:100
    }
  });

  protected readonly workerModel = mongoose.models.worker || mongoose.model('worker', this.workerSchema);

  protected createNewWorker(worker:worker) {
    return new this.workerModel({
      name:worker.name,
      furniture:worker.furniture,
    });
  }
}

export default WorkerModel;
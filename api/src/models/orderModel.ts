import mongoose from "mongoose";
const Schema = mongoose.Schema;

export interface order {
  name:string;
  color:string;
  metric:string;
  material:string;
  image:string;
}

class OrderModel {

  private readonly OrderSchema = new Schema({
    name: {
      type:String,
      required:true,
      maxLength:100,
      index:true
    },
    color: {
      type:String,
      index:true,
      required:true,
      maxlength:30
    },
    metric: {
      type:String,
      required:true,
      maxLength:50,
      index:true
    },
    material: {
      type:String,
      required:true,
      maxLength:100,
      index:true
    },
    image: {
      type:String,
      required:true,
      maxLength:100,
      index:true
    }
  });

  protected readonly orderModel = mongoose.models.order || mongoose.model('order', this.OrderSchema);

  protected createNewOrder(order:order) {
    return new this.orderModel({
      name:order.name,
      color:order.color,
      metric:order.metric,
      material:order.material,
      image:order.image
    });
  }
}

export default OrderModel;
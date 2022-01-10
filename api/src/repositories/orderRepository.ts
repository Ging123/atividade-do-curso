import OrderModel, { order } from "../models/orderModel";

class OrderRepository extends OrderModel {

  public async create(newOrder:order) {
    const order = this.createNewOrder(newOrder);
    await order.save();
    return order;
  }

  public async findAll() {
    return await this.orderModel.find({});
  }
}

export default OrderRepository;
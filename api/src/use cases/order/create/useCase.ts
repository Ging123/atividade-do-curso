import { order } from "../../../models/orderModel";
import OrderRepository from "../../../repositories/orderRepository";
import exception from "../../../utils/exceptions";
import SaleRepository from "../../../repositories/saleRepository";

class OrderCreateUseCase {

  private order = new OrderRepository();
  private sale = new SaleRepository();
  
  public async create(order:order) {
    this.validate(order);
    await this.createSale(order);
    return await this.order.create(order);
  }

  private async createSale(order:order) {
    await this.sale.create({
      name:order.name,
      price:0,
      status:'Solicitado'
    });
  }

  private validate(order:order) {
    this.validateName(order.name);
    this.validateColor(order.color);
    this.validateImage(order.image);
    this.validateMaterial(order.material);
    this.validateMetric(order.metric);
  }

  private validateName(name:string) {
    const emptyName = 'Nome do produto não foi preenchido';
    const nameTooBig = 'Nome deve ter no máximo 100 caracteries';
    if(!name) throw exception(emptyName);
    if(name.length > 100) throw exception(nameTooBig);
  }

  private validateColor(color:string) {
    const emptyColor = 'Cor do produto não foi preenchido';
    const colorTooBig = 'Cor do produto deve ter no máximo 30 caracteries';
    if(!color) throw exception(emptyColor);
    if(color.length > 30) throw exception(colorTooBig);
  }

  private validateMetric(metric:string) {
    const emptyMetric = 'Métricas do produto não foi preenchido';
    const metricTooBig = 'Métricas deve ter no máximo 50 caracteries';
    if(!metric) throw exception(emptyMetric);
    if(metric.length > 50) throw exception(metricTooBig);
  }

  private validateMaterial(material:string) {
    const emptyMaterial = 'Material do produto não foi preenchido';
    const materialTooBig = 'Material do produto deve ter no máximo 100 caracteries';
    if(!material) throw exception(emptyMaterial);
    if(material.length > 100) throw exception(materialTooBig);
  }

  private validateImage(image:string) {
    const emptyImage = 'Imagem do produto não foi preenchido';
    const imageTooBig = 'Imagem do produto deve ter no máximo 100 caracteries';
    if(!image) throw exception(emptyImage);
    if(image.length > 100) throw exception(imageTooBig);
  }
}

export default OrderCreateUseCase;
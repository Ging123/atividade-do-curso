import SaleModel, { sale } from "../models/saleModel";

class SaleRepository extends SaleModel {

  public async create(saleData:sale) {
    const sale = this.createNewSale(saleData);
    await sale.save();
    return sale;
  }

  public async updateStatus(sale:any, status:'Em construção'|'Entregue') {
    sale.status = status;
    await sale.save();
  }

  public async findAll() {
    return this.saleModel.find({});
  }
}

export default SaleRepository;
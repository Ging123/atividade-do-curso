import mongoose from "mongoose";
const Schema = mongoose.Schema;

export interface sale {
  name:string;
  price:number;
  status:'Solicitado'|'Em construção'|'Entregue';
}

class SaleModel {

  private readonly saleSchema = new Schema({
    name: {
      type:String,
      required:true,
      maxLength:100,
      index:true
    },
    price: {
      type:Number,
      index:true,
      required:true
    },
    status: {
      type:Number,
      index:true,
      required:true,
      maxlength:20
    }
  });

  protected readonly saleModel = mongoose.models.sale || mongoose.model('sale', this.saleSchema);

  protected createNewSale(sale:sale) {
    return new this.saleModel({
      name:sale.name,
      price:sale.price,
      status:sale.status
    });
  }
}

export default SaleModel;
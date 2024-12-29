import ProductModel from "../schema/Product.model";
import { ProductInput, Product } from "../libs/types/product";
import Errors, { HttpCode, Message } from "../libs/Errors";

class ProductService {
  private readonly ProductModel;
  constructor() {
    this.ProductModel = ProductModel;
  }
  // SPA

  // SSR
  public async createNewProduct(input: ProductInput): Promise<Product> {
    try {
      const result = await this.ProductModel.create(input);
      return result as unknown as Product;
    } catch (err) {
      console.log("ERROR, model:createNewProduct:", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }
}

export default ProductService;

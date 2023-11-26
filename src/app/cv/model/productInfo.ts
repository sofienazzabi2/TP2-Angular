import { Product } from './product';
export class ProductInfo {
  constructor(
    public products: Product[],
    public total: number,
    public skip: number,
    public limit: number
  ) {}
}

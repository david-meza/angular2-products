import {Injectable} from 'angular2/core';
import {Product} from './product';
import {PRODUCTS} from './mock-products';

@Injectable()
export class ProductService {
  getProducts() {
    return new Promise <Product[]> ( resolve =>
      setTimeout(() => resolve(PRODUCTS), 2000) // 2 second delay to simulate a query
    );
  }
}

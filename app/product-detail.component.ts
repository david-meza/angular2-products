import {Component, Input} from 'angular2/core';
import {Product} from './product';

@Component({
  selector: 'my-product-detail',
  template: `
    <div *ngIf="product">
      <h2>{{product.name}} details!</h2>
      <div><label>id: </label>{{product.id}}</div>
      <div><label>Price: </label>{{product.price | currency: 'USD': true }}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="product.name" placeholder="name"/>
      </div>
    </div>
  `
})
export class ProductDetailComponent {
  @Input()
  product: Product;
}

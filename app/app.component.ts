import {Component} from 'angular2/core';
import {Product} from './product'

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <ul class="products">
    <li *ngFor="#product of products"
      [class.selected]="product === selectedProduct"
      (click)="onSelect(product)">
      <span class="badge">{{product.id}}</span> {{product.name}}
    </li>
  </ul>
  <div *ngIf="selectedProduct">
    <h2>{{selectedProduct.name}} details!</h2>
    <div><label>id: </label>{{selectedProduct.id}}</div>
    <div><label>Price: </label>{{selectedProduct.price | currency: 'USD': true }}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="selectedProduct.name" placeholder="name"/>
    </div>
  </div>
  `,
  styleUrls: ['app/app.component.css']
})

export class AppComponent {
  title = 'My Products';
  products = PRODUCTS;
  
  selectedProduct: Product;
      
  onSelect(product: Product) { this.selectedProduct = product; }
}

const PRODUCTS: Product[] = [
  { "id": 1, "price": 45.12, "name": "TV Stand" },
  { "id": 2, "price": 25.12, "name": "BBQ Grill" },
  { "id": 3, "price": 43.12, "name": "Magic Carpet" },
  { "id": 4, "price": 12.12, "name": "Instant liquidifier" },
  { "id": 5, "price": 9.12, "name": "Box of puppies" },
  { "id": 6, "price": 7.34, "name": "Laptop Desk" },
  { "id": 7, "price": 5.34, "name": "Water Heater" },
  { "id": 8, "price": 4.34, "name": "Smart Microwave" },
  { "id": 9, "price": 93.34, "name": "Circus Elephant" },
  { "id": 10, "price": 87.34, "name": "Tinted Window" }
];

import {Component, OnInit} from 'angular2/core';
import {Product} from './product';
import {ProductDetailComponent} from './product-detail.component';
import {ProductService} from './product.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ProductDetailComponent],
    providers: [ProductService]
})

export class AppComponent implements OnInit {
    title = 'Products';
    products: Product[];
    selectedProduct: Product;
    
    constructor(private _productService: ProductService) { }
    
    getProducts() {
        this._productService.getProducts().then(products => this.products = products);
    }
    ngOnInit() {
        this.getProducts();
    }
    onSelect(product: Product) { this.selectedProduct = product; }
}

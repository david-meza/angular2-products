System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent, PRODUCTS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'My Products';
                    this.products = PRODUCTS;
                }
                AppComponent.prototype.onSelect = function (product) { this.selectedProduct = product; };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n  <h1>{{title}}</h1>\n  <ul class=\"products\">\n    <li *ngFor=\"#product of products\"\n      [class.selected]=\"product === selectedProduct\"\n      (click)=\"onSelect(product)\">\n      <span class=\"badge\">{{product.id}}</span> {{product.name}}\n    </li>\n  </ul>\n  <div *ngIf=\"selectedProduct\">\n    <h2>{{selectedProduct.name}} details!</h2>\n    <div><label>id: </label>{{selectedProduct.id}}</div>\n    <div><label>Price: </label>{{selectedProduct.price | currency: 'USD': true }}</div>\n    <div>\n      <label>name: </label>\n      <input [(ngModel)]=\"selectedProduct.name\" placeholder=\"name\"/>\n    </div>\n  </div>\n  ",
                        styleUrls: ['app/app.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
            PRODUCTS = [
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
        }
    }
});

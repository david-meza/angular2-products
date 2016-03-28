System.register(['angular2/core', './product'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, product_1;
    var ProductDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (product_1_1) {
                product_1 = product_1_1;
            }],
        execute: function() {
            ProductDetailComponent = (function () {
                function ProductDetailComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', product_1.Product)
                ], ProductDetailComponent.prototype, "product", void 0);
                ProductDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-product-detail',
                        template: "\n    <div *ngIf=\"product\">\n      <h2>{{product.name}} details!</h2>\n      <div><label>id: </label>{{product.id}}</div>\n      <div><label>Price: </label>{{product.price | currency: 'USD': true }}</div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"product.name\" placeholder=\"name\"/>\n      </div>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductDetailComponent);
                return ProductDetailComponent;
            })();
            exports_1("ProductDetailComponent", ProductDetailComponent);
        }
    }
});

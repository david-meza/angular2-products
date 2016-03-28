System.register(['angular2/core', './product-detail.component', './product.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, product_detail_component_1, product_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (product_detail_component_1_1) {
                product_detail_component_1 = product_detail_component_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_productService) {
                    this._productService = _productService;
                    this.title = 'Products';
                }
                AppComponent.prototype.getProducts = function () {
                    var _this = this;
                    this._productService.getProducts().then(function (products) { return _this.products = products; });
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getProducts();
                };
                AppComponent.prototype.onSelect = function (product) { this.selectedProduct = product; };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                        styleUrls: ['app/app.component.css'],
                        directives: [product_detail_component_1.ProductDetailComponent],
                        providers: [product_service_1.ProductService]
                    }), 
                    __metadata('design:paramtypes', [product_service_1.ProductService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

# angular2 Products

Demo of writing a component that shows a list of products

===================================
How to write an Angular 2 Component 
===================================

The Angular team introduced quite a few changes in version 2 of the framework, and components are one of the important ones. If you are familiar with Angular 1 applications, components are actually a form of directives that have been extended with template-oriented features. In addition, components are optimized for better performance and simpler configuration than a directive since it doesn’t support all its features. And, while a component is technically a directive, it is so distinctive and central to Angular 2 applications that you’ll find it is often separated as a different ingredient for the architecture of an application.

So, what is a component? In simple words, a component is a building block of an application that controls a part of your screen real estate, or your “view.” It does one thing and it does it well. For example, you may have a component to display a list of active chats in a messaging app (which in turn may have a child components to display the details of the chat or the actual conversation). Or, you may have an input field that uses Angular’s two-way data binding to keep your markup in sync with your Javascript. Or, at the most elementary level, you can have a component that substitutes with an HTML template with no special functionality just because you wanted to break down something complex into smaller, more manageable parts.

Now, I don’t believe too much in learning something by only reading about it, so let’s get our hands dirty and write our own component to see some sample usage. I will assume that you already have Typescript installed and have done the initial configuration required for any Angular 2 app. If you haven’t you can check out how to do so by clicking on this link: https://angular.io/docs/ts/latest/quickstart.html

You may have already seen a component at its most basic level:

```javascript
import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  template: '<h1>{{ title }}</h1>'
})

export class AppComponent {
  title = 'Hello World!';
}
```

That’s it! That’s all you really need to have a component. Three things are happening here:

We are importing the `Component` class from our Angular 2 core package.
We are using a Typescript decorator to attach some metadata to our `AppComponent` class. If you don’t know what a decorator is, it is simply a function that extends our class with Angular code so that it becomes an Angular component. Otherwise, it would just be a plain class with no relation to the Angular framework. In our options, we defined a selector, which is the tag name we use in our HTML so Angular can find where to insert our component, and a template, which becomes to inner contents of our selector tag. You may notice we are also using interpolation to bind our component data and display the value of our public variable in our template.
We export our `AppComponent` class so that we can import it elsewhere (in this case, we would import it in our main script so we can bootstrap our application).

That’s a good start, but let’s get into a more complex example that showcases other powerful features of Angular and Typescript/ES2015. In the following example, it would be possible to stuff everything into one component, but because we want to use best practices, I will divide our code into different components and services. Without further ado, let’s make a quick e-commerce page that displays a list of products. Let’s start from the index:

```html
<html>
<head>
  <title>Products</title>
  <meta name=”viewport” content=”width=device-width, initial-scale=1">

  <script src=”node_modules/es6-shim/es6-shim.min.js”></script>
  <script src=”node_modules/systemjs/dist/system-polyfills.js”></script>

  <script src=”node_modules/angular2/bundles/angular2-polyfills.js”></script>
  <script src=”node_modules/systemjs/dist/system.src.js”></script>
  <script src=”node_modules/rxjs/bundles/Rx.js”></script>
  <script src=”node_modules/angular2/bundles/angular2.dev.js”></script>

  <link rel=”stylesheet” href=”styles.css”>

  <script>
    System.config({
      packages: { 
        app: {
          format: ‘register’,
          defaultExtension: ‘js’
        }
      }
    });

    System.import(‘app/main’)
    .then(null, console.error.bind(console));
  </script>

</head>
<body>
  <my-app>Loading…</my-app>
</body>

</html>
```

Nothing out of the ordinary going on here. We are just importing all the necessary scripts for our application to work as demonstrated in the quick-start.

Our `main.ts` should already look something like this:

```javascript
import {bootstrap} from ‘angular2/platform/browser’
import {AppComponent} from ‘./app.component’

bootstrap(AppComponent);
```

We are importing the bootstrap function from the Angular 2 package, and our AppComponent class from our local directory. Then we initialize the application.

Our `app.component.ts` is where the most of the magic happens:

```javascript
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
```
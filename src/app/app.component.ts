import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './modules/products/components/products.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'onlinestore';

  @ViewChild(ProductsComponent)
  private products?: ProductsComponent;

  getProducts(category: string) {
    this.products?.getProducts(category);
  }
}

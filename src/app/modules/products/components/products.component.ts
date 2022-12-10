import { Component, OnInit } from '@angular/core';
import { ProductCard, ProductCardPage } from 'src/app/model/productCard.model';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  private pageSize: number = 20;
  private page: number = 0;
  private category: string | undefined;
  products?: ProductCard[];

  constructor(private productsService: ProductsService) {}
  ngOnInit(): void {
    console.log(this.category);
    this.getProducts(this.category);
  }

  getProducts(category: string | undefined) {
    this.page = 0;
    this.category = category;
    this.productsService
      .getProducts(this.page, this.pageSize, this.category)
      .subscribe((data: ProductCardPage) => {
        this.products = data.content;
      });
  }
}

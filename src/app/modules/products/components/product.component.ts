import { Component, Input, OnInit } from '@angular/core';
import { Product, ProductCard } from 'src/app/model/productCard.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input('productCard')
  productCard?: ProductCard;
  defaultVariation?: Product;

  ngOnInit(): void {
    this.defaultVariation = this.productCard?.products[0];
  }
}

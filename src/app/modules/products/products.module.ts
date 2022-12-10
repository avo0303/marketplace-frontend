import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ProductComponent } from './components/product.component';
import { ProductsComponent } from './components/products.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [ProductComponent, ProductsComponent],
  exports: [ProductComponent, ProductsComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatPaginatorModule,
  ],
})
export class ProductsModule {}

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderModule } from './modules/header/header.module';
import { ProductsModule } from './modules/products/products.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [AppComponent],
  imports: [HeaderModule, ProductsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header.component';
import { ProfileComponent } from './components/profile.component';
import { AuthorizationComponent } from './components/authorization.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [HeaderComponent, ProfileComponent, AuthorizationComponent],
  exports: [HeaderComponent],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
  ],
})
export class HeaderModule {}

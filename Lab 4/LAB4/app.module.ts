import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { Image1Component } from './image1/image1.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    Image1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

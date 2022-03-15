import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { Image1Component } from './image1/image1.component';
import { CatergoryComponent } from './catergory/catergory.component';
import { RouterModule } from '@angular/router';
import { Categ1ItemsComponent } from './categ1-items/categ1-items.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    Image1Component,
    CatergoryComponent,
    Categ1ItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'categ1-items', component:Categ1ItemsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

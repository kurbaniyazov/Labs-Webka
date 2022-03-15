import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { Categ1ItemsComponent } from './categ1-items/categ1-items.component';

const routes: Routes = [
  {path: 'categ1-items', component: Categ1ItemsComponent  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/products';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  products = products;

  constructor() { }

  ngOnInit(): void {
  }

}

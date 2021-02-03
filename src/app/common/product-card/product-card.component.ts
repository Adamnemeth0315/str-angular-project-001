
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() set product(value: Product) {
    this.origProduct = value;
    this.actionPrice = value.action ? Math.floor(.7 * value.price) : value.price;
  }

  actionPrice: number = 0;
  origProduct: Product = new Product();

  constructor() {
  }

  ngOnInit(): void {
  }
}

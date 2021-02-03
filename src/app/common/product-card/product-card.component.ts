import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
<<<<<<< HEAD
=======
  @Input() product: Product;
  @Input() actionPrices: number;
  // @Input() productService: ProductService;
>>>>>>> origin/dev

  @Input() productService: ProductService;

  @Input() set product(value: Product) {
    this.actionPrice = value.action ? .7 * value.price : value.price;
  }

  actionPrice: number = 0;

  constructor() { }

  ngOnInit(): void {
  }


}

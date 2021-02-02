import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { ProductCard } from '../product-card';



@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  // @Input() productService: ProductService;

  //productCard: ProductCard = new ProductCard();

  // const actionPrice = this.price * (1 - .3 * this.action);

  constructor() {

  }

  ngOnInit(): void {

  }


}

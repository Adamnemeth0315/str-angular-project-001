import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component implements OnInit {

  topFiveFeaturedProducts: Product[] = this.productService.list.filter(product => product.featured)
    .sort(() => 0.5 - Math.random())
    .slice(0, 5);

  featuredList = this.topFiveFeaturedProducts;
  productList: Product[] = this.productService.list;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  allProductsInCategory(catId: number): Product[] {
    return this.productService.list.filter(product => product.catId == catId);
  }
}

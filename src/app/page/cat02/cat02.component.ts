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

  // featuredList = this.topFiveFeaturedProducts;
  featuredList = this.allProductsInCategory(2)
    .sort(() => 0.5 - Math.random())
    .slice(0, 5);

  productList: Product[] = this.productService.list;
  cat02Products = this.allProductsInCategory(2);
  phrase = '';
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  allProductsInCategory(catId: number): Product[] {
    return this.productService.list.filter(product => product.catId == catId);
  }

  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

}

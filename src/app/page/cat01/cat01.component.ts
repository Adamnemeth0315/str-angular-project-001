import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {


  topFiveFeaturedProducts: Product[] = this.productService.list.filter(product => product.featured)
    .sort(() => 0.5 - Math.random())
    .slice(0, 5);

  // featuredList = this.topFiveFeaturedProducts;
  featuredList = this.allProductsInCategory(1)
    .sort(() => 0.5 - Math.random())
    .slice(0, 5);
  productList: Product[] = this.productService.list;
  cat01Products = this.allProductsInCategory(1);
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

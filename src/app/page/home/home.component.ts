import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCard } from 'src/app/common/product-card';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  featuredList: Observable<Product[]> = this.productService.getAll().pipe(
    map( products => products.filter( product => product.catId === 1))
  );
  phrase = '';
  /* actionPrices = this.productService.price * (1 - .3); */


  /*   featuredList = this.allProductsInCategory(2); */
  productList$: Observable<Product[]> = this.productService.getAll();
  
  price: number;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  productsWithPath(method: Function, id: number): Product[] {
    const array: any = method(id);
    if (array)
      array.map(item => item.image = "assets/img/" + item.image);
    return array;
  }

  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})

export class Cat02Component implements OnInit {
  

  
  productList$: Observable<Product[]> = this.productService.getAll().pipe(
    map( products => products.filter( product => product.catId === 2))
  );
  phrase = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }
  
  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

}

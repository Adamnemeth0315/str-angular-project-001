import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {
  // @Input() productList$: Observable<Product[]>;

  productList$: Observable<Product[]> = this.productService.getAll().pipe(
    map( products => products.filter( product => product.catId === 1))
  );
  phrase = '';
  filterKey= 'title';
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }



  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }
}

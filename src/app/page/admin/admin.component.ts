import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCard } from 'src/app/common/product-card';
import { Product } from 'src/app/model/product';
import { ConfigService } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  productList$: Observable<Product[]> = this.productService.getAll();
  phrase: string = '';
  filterKey: string = 'title';
  filterKeys: string[] = Object.keys( new Product() );

  constructor(
    private config: ConfigService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }

  onUpdate(product: Product): void {
    this.productService.update(product).subscribe(updatedProduct => console.log(updatedProduct));
  }

  onDelete(product: Product): void {
    this.productService.remove(product).subscribe(() => console.log('deleted'));
  }

  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }
}


import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from 'src/app/model/product';
import { ConfigService, ITableCol } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {

  @Input() productList$: Observable<Product[]>;
  cols: ITableCol[] = this.config.tableCols;

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
    this.productService.update(product).subscribe(() => console.log('deleted'));
  }

}

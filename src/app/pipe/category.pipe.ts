import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(productList: Product[], catId: number): Product[] {
    if (!Array.isArray(productList) || !catId) {
      return productList;
    }
    return productList.filter(item => catId === item.catId);
  }
}

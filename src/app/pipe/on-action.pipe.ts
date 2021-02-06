import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'onAction'
})
export class OnActionPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(productList: Product[]): Product[] {
    if (!Array.isArray(productList)) {
      return productList;
    }
    return productList.filter(item => item.action);
  }
}

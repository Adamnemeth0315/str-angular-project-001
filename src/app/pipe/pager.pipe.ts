import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pager'
})
export class PagerPipe implements PipeTransform {

  transform(value: any[], start: number, end: number): any[] {
    if (!Array.isArray(value)) {
      return value;
    }
    let  counter: number = 10;
    start += counter;
    end += counter;
    return value.slice(start, end);
  }
  }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// import { ProductCard } from '../common/product-card';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {


  apiUrl: string = 'http://localhost:3000/products';
  catId: number;

  price: number;

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  get(product: Product): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${product.id}`);
  }

  // create(user: User): Observable<User> {
  //   return this.http.post<User>(this.apiUrl, user);
  // }

  update(product: Product): Observable<Product> {
    // const id: number = user.id || 0;
    // const patchUser = ({ ...user });
    // delete patchUser.id;
    // return this.http.patch<User>(`${this.apiUrl}/${id}`, patchUser);
    return this.http.patch<Product>(`${this.apiUrl}/${product.id}`, product);
  }

  remove(product: Product): Observable<Product> {
    return this.http.delete<Product>(`${this.apiUrl}/${product.id}`);
  }

  // topFiveFeaturedProducts: Product[] = this.list.filter(product => product.featured)
  //   .sort(() => 0.5 - Math.random())
  //   .slice(0, 5);

  // // productsInCategory(catId: number): Product[] {
  // //   return this.list.filter(product => product.catId == catId)
  // //     .sort(() => 0.5 - Math.random())
  // //     .slice(0, 5);
  // // }

  // allProductsInCategory(catId: number): Product[] {
  //   return this.list.filter(product => product.catId == catId);
  // }

  // fiveRandomProductsInCategory(catId: number): Product[] {
  //   return this.allProductsInCategory(catId)
  //     // .sort(() => 0.5 - Math.random())
  //     .slice(0, 5);
  // }

  // getCard(id: number): ProductCard {
  //   const myCard = new ProductCard();
  //   const myProduct = this.list.find(item => item.id == id);
  //   if (myProduct) {
  //     myCard.id = myProduct.id;
  //     myCard.author = myProduct.author;
  //     myCard.title = myProduct.title;
  //     myCard.description = myProduct.description;
  //     myCard.image = "/src/assets/img/" + myProduct.image;
  //     myCard.price = myProduct.price;
  //     myCard.stock = myProduct.stock;
  //   };
  //   return myCard;
  // }

  // // productsWithPath(method: Function, id: number): Product[] | ProductCard {
  // //   const array: any = method(id);
  // //   if (array)
  // //     array.map(item => item.image = "/src/assets/img/" + item.image);
  // //   return
  // // }

  // productsWithPath(method: Function, id: number): Product[] {
  //   const array: any = method(id);
  //   if (array)
  //     array.map(item => item.image = "/src/assets/img/" + item.image);
  //   return array;
  // }



}

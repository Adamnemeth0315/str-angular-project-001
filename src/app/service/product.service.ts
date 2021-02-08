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
}

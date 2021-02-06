import { Input } from "@angular/core";
import { Observable } from "rxjs";
import { AppComponent } from "../app.component";
import { Product } from "../model/product";
import { ProductService } from "../service/product.service";

export class ProductCard {

    id: number;
    image: string;
    author: string;
    title: string;
    description: string;
    price: number;
    stock: number;
    action: boolean;

    // @Input() productList$: Observable<Product[]>;

    constructor(properties?: ProductCard) {
        if (properties) {
            this.id = properties.id;
            this.image = properties.image;
            this.author = properties.author;
            this.title = properties.title;
            this.description = properties.description;
            this.price = properties.price;
            this.stock = properties.stock;
            this.action = properties.action;
        }
    }


    /* productList: Product[] = this.productService.list;
    
     constructor(id: number, productService: ProductService) { 
         this.id = id;
    
             
             this.author = properties.author;
             this.title = properties.title;
             this.description = properties.description;
             this.price = properties.price;
             this.stock = properties.stock;
    
         
    }
    getCardData(id: number): ProductCard {
    let card = productList.find(item)
    }
     */
}

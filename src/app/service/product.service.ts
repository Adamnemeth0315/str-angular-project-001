import { Injectable } from '@angular/core';
import { ProductCard } from '../common/product-card';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // catId: number;
  list: Product[] = [
    {
      id: 1, catId: 2, title: "Stay", author: "Raynor Besson",
      description: "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
      image: "assets/img/01.jpg", price: 8239, stock: 7, featured: true, active: true, action: true
    },
    {
      id: 2, catId: 2, title: "Stratton Story, The", author: "Harv Beardwood",
      description: "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
      image: "assets/img/02.jpg", price: 6420, stock: 4, featured: true, active: true, action: true
    },
    {
      id: 3, catId: 2, title: "Why Not? (Eijanaika)", author: "Fonz Teas",
      description: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
      image: "assets/img/03.jpg", price: 5528, stock: 1, featured: false, active: true, action: false
    },
    {
      id: 4, catId: 2, title: "Dr. Dolittle 3", author: "Leanor Petersen",
      description: "Suspendisse ornare consequat lectus.",
      image: "assets/img/04.jpg", price: 4835, stock: 4, featured: true, active: true, action: true
    },
    {
      id: 5, catId: 2, title: "Mine Games", author: "Alana McBeith",
      description: "Curabitur in libero ut massa volutpat convallis.",
      image: "assets/img/05.jpg", price: 3886, stock: 3, featured: false, active: true, action: true
    },
    {
      id: 6, catId: 2, title: "Garden Lovers (Eedenistä pohjoiseen)", author: "Ewen Dabel",
      description: "Nunc rhoncus dui vel sem. Mauris sit amet eros.",
      image: "assets/img/06.jpg", price: 9647, stock: 1, featured: true, active: false, action: true
    },
    {
      id: 7, catId: 2, title: "The Trip to Squash Land", author: "Kirbee Jersh",
      description: "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
      image: "assets/img/07.jpg", price: 3176, stock: 3, featured: true, active: true, action: true
    },
    {
      id: 8, catId: 2, title: "Tale of Ham and Passion, A (Jamón, Jamón)", author: "Joshuah Gladebeck",
      description: "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
      image: "assets/img/08.jpg", price: 6621, stock: 7, featured: false, active: true, action: true
    },
    {
      id: 9, catId: 2, title: "Superman/Shazam!: The Return of Black Adam", author: "Tait Conkay",
      description: "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. ",
      image: "assets/img/09.jpg", price: 8167, stock: 9, featured: true, active: true, action: false
    },
    {
      id: 10, catId: 2, title: "Beauty and the Beast", author: "Thorin Story",
      description: "Lorem ipsum dolor sit amet, consectetuer elit. Phasellus id sapien iaculis congue.",
      image: "assets/img/10.jpg", price: 3602, stock: 4, featured: true, active: true, action: true
    },
    {
      id: 11, catId: 2, title: "Naked Gun: From the Files of Police Squad!, The", author: "Stan Gallanders",
      description: "Nulla facilisi. Cras non velit nec nisi vulputate tincidunt lacus at velit.",
      image: "assets/img/11.jpg", price: 7245, stock: 9, featured: false, active: true, action: true
    },
    {
      id: 12, catId: 2, title: "Lover, The (Amant, L')", author: "Phaidra De Lisle",
      description: "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
      image: "assets/img/12.jpg", price: 3352, stock: 7, featured: true, active: true, action: true
    },
    {
      id: 13, catId: 3, title: "Baba és a család", author: "Susanne Kiera",
      description: "Donec vitae nisi. Nam ultrices, libero, sed vel enim sit amet nunc viverra dapibus.",
      image: "assets/img/13.jpg", price: 7368, stock: 10, featured: true, active: true, action: false
    },
    {
      id: 14, catId: 3, title: "Szakácskönyv férfiaknak", author: "Edgardo Noen",
      description: "Integer ac neque. Duis bibendum. Aenean lectus. Pellentesque eget nunc.",
      image: "assets/img/14.jpg", price: 6018, stock: 8, featured: false, active: true, action: true
    },
    {
      id: 15, catId: 3, title: "Szoptató anyák", author: "North Colt",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      image: "assets/img/15.jpg", price: 9752, stock: 5, featured: false, active: true, action: true
    },
    {
      id: 16, catId: 3, title: "Diéták nagykönyve", author: "Armand Nourse",
      description: "Integer non velit. Vestibulum ante ipsum primis; sit amet lobortis sapien mi.",
      image: "assets/img/16.jpg", price: 3050, stock: 8, featured: true, active: true, action: false
    },
    {
      id: 17, catId: 3, title: "Gasztro ajándékok", author: "Britney Carff",
      description: "Nam nulla. Donec diam neque, vestibulum eget, ultrices vel, augue.",
      image: "assets/img/17.jpg", price: 6438, stock: 2, featured: true, active: true, action: true
    },
    {
      id: 18, catId: 2, title: "Fun with Dick and Jane", author: "Angelina Hofner",
      description: "Nulla ac enim. Nulla tellus.",
      image: "assets/img/18.jpg", price: 2728, stock: 10, featured: true, active: false, action: true
    },
    {
      id: 19, catId: 2, title: "I Live in Fear (Ikimono no kiroku)", author: "Vaughan Slessar",
      description: "Duis bibendum. Morbi non quam nec dui luctus rutrum.",
      image: "assets/img/19.jpg", price: 9877, stock: 1, featured: true, active: true, action: false
    },
    {
      id: 20, catId: 1, title: "Stargate: Continuum", author: "Muriel Fodden",
      description: "Vestibulum rutrum rutrum neque.",
      image: "assets/img/20.jpg", price: 8495, stock: 9, featured: true, active: true, action: true
    },
    {
      id: 21, catId: 2, title: "Bridget Jones: The Edge of Reason", author: "Sidonia Penley",
      description: "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
      image: "assets/img/21.jpg", price: 4752, stock: 4, featured: false, active: false, action: true
    },
    {
      id: 22, catId: 2, title: "Lasa y Zabala", author: "Sayre Dransfield",
      description: "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
      image: "assets/img/22.jpg", price: 9335, stock: 3, featured: true, active: true, action: false
    },
    {
      id: 23, catId: 2, title: "Tomb, The", author: "Boothe Hiom",
      description: "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis.",
      image: "assets/img/23.jpg", price: 8557, stock: 9, featured: false, active: true, action: false
    },
    {
      id: 24, catId: 1, title: "Darcy nyomában", author: "Yasmin Ruttgers",
      description: "Nulla suscipit ligula at ipsum ac tellus semper interdum.",
      image: "assets/img/24.jpg", price: 5791, stock: 1, featured: true, active: false, action: false
    },
    {
      id: 25, catId: 2, title: "Edges of the Lord", author: "Grace Bartlosz",
      description: "Etiam justo. Fusce consequat.",
      image: "assets/img/25.jpg", price: 7724, stock: 6, featured: true, active: true, action: true
    },
    {
      id: 26, catId: 1, title: "Jacket, The", author: "Howard Slee",
      description: "Phasellus in felis. Donec semper sapien a libero.",
      image: "assets/img/26.jpg", price: 5297, stock: 4, featured: false, active: false, action: false
    },
    {
      id: 27, catId: 1, title: "Living in Oblivion", author: "Carlyle Stilliard",
      description: "Pellentesque at nulla. Suspendisse potenti.",
      image: "assets/img/27.jpg", price: 5037, stock: 2, featured: true, active: false, action: false
    },
    {
      id: 28, catId: 2, title: "Merrily We Live", author: "Pierette Rosie",
      description: "In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      image: "assets/img/28.jpg", price: 9309, stock: 8, featured: true, active: true, action: false
    },
    {
      id: 29, catId: 2, title: "Four Seasons (Seasons, The) (Vremena goda)", author: "Ally Routley",
      description: "Morbi porttitor lorem id ligula, tempus sit amet, sem.",
      image: "assets/img/29.jpg", price: 7039, stock: 5, featured: true, active: true, action: true
    },
    {
      id: 30, catId: 2, title: "Phantasm II", author: "Sharline Roggers",
      description: "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
      image: "assets/img/30.jpg", price: 9935, stock: 10, featured: false, active: false, action: false
    },
    {
      id: 31, catId: 2, title: "Aces: Iron Eagle III", author: "Claus Klewer",
      description: "Nulla ac enim. In tempor, turpis nec euismod ligula nec sem.",
      image: "assets/img/31.jpg", price: 4695, stock: 4, featured: true, active: true, action: false
    },
    {
      id: 32, catId: 2, title: "Expelled", author: "Adolph Grose",
      description: "Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
      image: "assets/img/32.jpg", price: 2680, stock: 0, featured: true, active: true, action: false
    },
    {
      id: 33, catId: 2, title: "South of Heaven, West of Hell", author: "Cullan Kirkup",
      description: "In congue. Etiam justo.",
      image: "assets/img/33.jpg", price: 5612, stock: 10, featured: true, active: false, action: false
    },
    {
      id: 34, catId: 1, title: "Boldog szülinapot, Winnie!", author: "Ranice Leve",
      description: "Nulla nisl. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique.",
      image: "assets/img/34.jpg", price: 3813, stock: 9, featured: false, active: true, action: true
    },
    {
      id: 35, catId: 1, title: "Ördögszekerek", author: "Bennett Mulvihill",
      description: "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
      image: "assets/img/35.jpg", price: 2444, stock: 5, featured: true, active: true, action: false
    },
    {
      id: 36, catId: 1, title: "Sommerset", author: "Even Lagen",
      description: "Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      image: "assets/img/36.jpg", price: 3227, stock: 0, featured: true, active: true, action: true
    },
    {
      id: 37, catId: 2, title: "Power of Kangwon Province, The (Kangwon-do ui him)", author: "Asia Males",
      description: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue.",
      image: "assets/img/37.jpg", price: 5874, stock: 8, featured: true, active: false, action: true
    },
    {
      id: 38, catId: 2, title: "The Great Scout & Cathouse Thursday", author: "Vannie Weatherill",
      description: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
      image: "assets/img/38.jpg", price: 9621, stock: 2, featured: false, active: true, action: true
    },
    {
      id: 39, catId: 2, title: "Don", author: "Bernelle Annon",
      description: "In hac habitasse platea dictumst. Integer tincidunt ante vel ipsum.",
      image: "assets/img/39.jpg", price: 2897, stock: 2, featured: true, active: false, action: false
    },
    {
      id: 40, catId: 2, title: "Nömadak TX", author: "Jamie Simoncelli",
      description: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, nisl.",
      image: "assets/img/40.jpg", price: 6575, stock: 10, featured: false, active: false, action: true
    },
    {
      id: 41, catId: 2, title: "Freedom Song", author: "Jacintha Lockhurst",
      description: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
      image: "assets/img/41.jpg", price: 4851, stock: 9, featured: false, active: true, action: true
    },
    {
      id: 42, catId: 2, title: "Moon Zero Two", author: "Fleur Sutor",
      description: "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
      image: "assets/img/42.jpg", price: 8288, stock: 3, featured: false, active: true, action: true
    },
    {
      id: 43, catId: 2, title: "Traveler, The", author: "Orson Hassett",
      description: "Maecenas ut massa quis augue luctus tincidunt.",
      image: "assets/img/43.jpg", price: 3745, stock: 5, featured: false, active: true, action: false
    },
    {
      id: 44, catId: 2, title: "Girl of Finland (Lapualaismorsian)", author: "Patrick Bickers",
      description: "Praesent blandit lacinia erat. Aliquam augue quam, consectetuer eget, rutrum at, lorem.",
      image: "assets/img/44.jpg", price: 8341, stock: 2, featured: false, active: false, action: false
    },
    {
      id: 45, catId: 2, title: "Dead of Night", author: "Ambur Springate",
      description: "Nam ultrices,  nulla elit ac nulla. Sed vel enim sit viverra dapibus.",
      image: "assets/img/45.jpg", price: 9684, stock: 4, featured: false, active: false, action: false
    },
    {
      id: 46, catId: 2, title: "Rendez-vous d'Anna, Les (Meetings of Anna, The)", author: "Merrilee Coghill",
      description: "Vivamus in felis eu sapien cursus vestibulum.",
      image: "assets/img/46.jpg", price: 8945, stock: 1, featured: false, active: false, action: true
    },
    {
      id: 47, catId: 1, title: "A bringaverseny", author: "Gardener Mackriell",
      description: "Cum sociis natoque penatibus. Vestibulum rutrum rutrum neque.",
      image: "assets/img/47.jpg", price: 2119, stock: 7, featured: true, active: false, action: true
    },
    {
      id: 48, catId: 1, title: "A filmforgatás", author: "Wright Raspin",
      description: "Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
      image: "assets/img/48.jpg", price: 5501, stock: 8, featured: false, active: false, action: true
    },
    {
      id: 49, catId: 1, title: "A láthatatlan állatkölyök", author: "Erinn Godball",
      description: "Curabitur at ipsum ac tellus semper interdum. Quisque arcu libero, diam.",
      image: "assets/img/49.jpg", price: 6135, stock: 5, featured: true, active: true, action: true
    },
    {
      id: 50, catId: 1, title: "A színek varázslata", author: "Lorine Struijs",
      description: "Nullam varius. Mauris ullamcorper purus sit amet nulla.",
      image: "assets/img/50.jpg", price: 9071, stock: 9, featured: true, active: false, action: true
    },
    {
      id: 51, catId: 2, title: "Exit Wounds", author: "Roxanne Cicculi",
      description: "Morbi a ipsum. Integer a nibh. In quis justo.",
      image: "assets/img/51.jpg", price: 8633, stock: 10, featured: true, active: true, action: true
    },
    {
      id: 52, catId: 2, title: "Secret of the Wings", author: "Denys Sainthill",
      description: "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
      image: "assets/img/52.jpg", price: 5774, stock: 5, featured: false, active: true, action: false
    },
    {
      id: 53, catId: 2, title: "Dead End", author: "Golda Kiddie",
      description: "Cum sociis natoque penatibus et magnis, nascetur ridiculus mus.",
      image: "assets/img/53.jpg", price: 3618, stock: 7, featured: true, active: true, action: true
    },
    {
      id: 54, catId: 1, title: "Hyde tanár úr megkergül", author: "Tessi Emmanuele",
      description: "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      image: "assets/img/61.jpg", price: 9838, stock: 10, featured: true, active: false, action: true
    },
    {
      id: 55, catId: 1, title: "Nelli és az égi lámpás", author: "Lynna Gronaver",
      description: "Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
      image: "assets/img/58.jpg", price: 6001, stock: 7, featured: false, active: true, action: false
    }]

  constructor() { }

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

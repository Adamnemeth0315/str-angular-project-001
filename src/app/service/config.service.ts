import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

export interface ITableCol {
  key: string;
  text: string;
  editable?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'Éden könyvesbolt';

  menuItems: IMenuItem[] = [
    { text: 'Home', link: '/', icon: 'home' },
    { text: 'Ifjúsági', link: '/ifjusagi' },
    { text: 'Felnőtt', link: '/felnott' },
    { text: 'Admin', link: '/admin' },
  ];

   tableCols: ITableCol[] = [
    {key: 'id', text: '#', editable: false},
    {key: 'catID', text: 'CatId', editable: false},
    {key: 'title', text: 'Title', editable: false},
    {key: 'author', text: 'Author', editable: true},
    {key: 'price', text: 'Price', editable: true},
    {key: 'stock', text: 'Stock', editable: true},
    {key: 'featured', text: 'Featured', editable: true},
    {key: 'action', text: 'Action', editable: true}
  ]; 

  constructor() { }
}

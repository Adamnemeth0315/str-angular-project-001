import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
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
  ];

  constructor() { }
}

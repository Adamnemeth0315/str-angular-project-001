import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ConfigService, IMenuItem } from '../service/config.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  appName: string = this.config.appName;
  menuItems: IMenuItem[] = this.config.menuItems;

  constructor(
    private config: ConfigService,
  ) { }

  ngOnInit(): void {
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { HomeComponent } from './page/home/home.component';
import { ProductCardComponent } from './common/product-card/product-card.component';
import { ProductListComponent } from './common/product-list/product-list.component';
import { ProductPagingComponent } from './common/product-paging/product-paging.component';
import { FilterPipe } from './pipe/filter.pipe';
import { AdminComponent } from './page/admin/admin.component';
import { DataEditorComponent } from './common/data-editor/data-editor.component';
import { OnActionPipe } from './pipe/on-action.pipe';
import { RandomizePipe } from './pipe/randomize.pipe';
import { CategoryPipe } from './pipe/category.pipe';
import { FeaturedPipe } from './pipe/featured.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Cat01Component,
    Cat02Component,
    HomeComponent,
    ProductCardComponent,
    ProductListComponent,
    ProductPagingComponent,
    FilterPipe,
    AdminComponent,
    DataEditorComponent,
    OnActionPipe,
    RandomizePipe,
    CategoryPipe,
    FeaturedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

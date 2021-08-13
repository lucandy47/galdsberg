import { ProductsRoutingModule } from './products-routing.module';
import { BeerListComponent } from './beer-list/beer-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LagerPilsnerBeersComponent } from './lager-pilsner-beers/lager-pilsner-beers.component';
import { WheatBeersComponent } from './wheat-beers/wheat-beers.component';
import { IpaBeersComponent } from './ipa-beers/ipa-beers.component';
import { DarkBeersComponent } from './dark-beers/dark-beers.component';
import { SpecialtyBeersComponent } from './specialty-beers/specialty-beers.component';
import { CartComponent } from '../components/cart/cart.component';
import { CartItemComponent } from '../components/cart/cart-item/cart-item.component';
import { BeerItemComponent } from './beer-item/beer-item.component';
import { ViewBeerComponent } from './view-beer/view-beer.component';



@NgModule({
  declarations: [BeerListComponent,LagerPilsnerBeersComponent,WheatBeersComponent,IpaBeersComponent,DarkBeersComponent,SpecialtyBeersComponent,CartComponent,CartItemComponent, BeerItemComponent, ViewBeerComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }

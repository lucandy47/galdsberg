import { BeerListComponent } from './beer-list/beer-list.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LagerPilsnerBeersComponent } from './lager-pilsner-beers/lager-pilsner-beers.component';
import { WheatBeersComponent } from './wheat-beers/wheat-beers.component';
import { IpaBeersComponent } from './ipa-beers/ipa-beers.component';
import { DarkBeersComponent } from './dark-beers/dark-beers.component';
import { SpecialtyBeersComponent } from './specialty-beers/specialty-beers.component';
import { ViewBeerComponent } from './view-beer/view-beer.component';


const routes: Route[] = [
  // localhost:4200/products
  { path: '', component: BeerListComponent, pathMatch: 'full' },
  {path:'lagerAndPils',component:LagerPilsnerBeersComponent},
  {path:'wheat',component:WheatBeersComponent},
  {path:'ipa',component:IpaBeersComponent},
  {path:'dark',component:DarkBeersComponent},
  {path:'specialties',component:SpecialtyBeersComponent},
  {path:'view-beer/:id',component:ViewBeerComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }

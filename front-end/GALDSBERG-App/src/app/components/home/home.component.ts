import { Component, OnInit } from '@angular/core';
import { BeerService } from 'src/app/products/services/beer.service';
import { Beer } from 'src/app/products/models/beer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  beers:Beer[];
  bestSellerBeer:Beer;
  newestAdditionBeer:Beer;
  constructor(private beerService:BeerService,private _route:Router) { }

  ngOnInit(): void {
    this.getBeers();
  }

  private getBeers(){
    this.beerService.getBeersList().subscribe(data=>{
      this.beers=data;
      this.bestSellerBeer=this.beers[2];
      this.newestAdditionBeer=this.beers[7];
  }
    )
}

  private goToProducts(beer:Beer){
    if(beer.type=="Dark"){
      this._route.navigate(['products/dark']);
    }else if(beer.type=="Wheat"){
      this._route.navigate(['products/wheat']);
    }else if(beer.type=="IPA"){
      this._route.navigate(['products/ipa']);
    }else if(beer.type=="Specialty"){
      this._route.navigate(['products/specialties']);
    }else if(beer.type=="LagerAndPilsner"){
      this._route.navigate(['products/lagerAndPils']);
    }
  }

  viewBeer(id:number){
    console.log("Vreau sa vad berea");
    this._route.navigate(['/products/view-beer',id]);
  }
}

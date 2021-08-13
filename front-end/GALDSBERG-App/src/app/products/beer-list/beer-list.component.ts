import { BeerService } from '../services/beer.service';
import { Component, OnInit } from '@angular/core';
import { Beer } from '../models/beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  beers:Beer[];


  constructor(private beerService:BeerService) { }

  ngOnInit(): void {
    this.getBeers();
  }

  private getBeers(){
    this.beerService.getBeersList().subscribe(data=>{
      this.beers=data;
    });
  }

  sortPriceAscending(){
    this.beers.sort((a,b)=>(a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
    console.log("Beri sortate crescator");
  }

  sortPriceDescending(){
    this.beers.sort((a,b)=>(a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0));
    console.log("Beri sortate descrescator");
  }
  sortNameAscending(){
    this.beers.sort((a,b)=>(a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    console.log("Beri sortate dupa nume crescator");
  }
  sortNameDescending(){
    this.beers.sort((a,b)=>(a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0));
    console.log("Beri sortate dupa nume descrescator");
  }


}

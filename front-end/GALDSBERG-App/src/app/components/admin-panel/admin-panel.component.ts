import { Component, OnInit } from '@angular/core';
import { BeerService } from 'src/app/products/services/beer.service';
import { Beer } from 'src/app/products/models/beer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  beers:Beer[];

  constructor(private beerService:BeerService,private _router: Router) { }

  ngOnInit(): void {
    this.getBeers();
  }

  private getBeers(){
    this.beerService.getBeersList().subscribe(data=>{
      this.beers=data;
    });
  }

  updateBeer(id:number){
    this._router.navigate(['update-beer',id]);
  }

  deleteBeer(id:number){
    this.beerService.deleteBeer(id).subscribe(data=>{
      console.log("Beer deleted succesfully");
      this.getBeers();
    })
  }

  goToAddBeer(){
    this._router.navigate(['add-beer']);
  }
}

import { Component, OnInit } from '@angular/core';
import { BeerService } from 'src/app/products/services/beer.service';
import { Router } from '@angular/router';
import { Beer } from 'src/app/products/models/beer';

@Component({
  selector: 'app-add-beer',
  templateUrl: './add-beer.component.html',
  styleUrls: ['./add-beer.component.css']
})
export class AddBeerComponent implements OnInit {
  errorMessage='';

  beer=new Beer();
  
  constructor(private beerService :BeerService,private _router: Router) { }

  ngOnInit(): void {
  }

  addNewBeer(){
    this.beerService.addBeer(this.beer).subscribe(
      data=>{
        
        console.log("New beer added succesfully!");
        this._router.navigate(['admin-panel']);
      },
      error=>{
        console.log("A aparut o eroare");

        this.errorMessage=error.error;
      }
    )
  }
}

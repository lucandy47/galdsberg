import { Component, OnInit } from '@angular/core';
import { BeerService } from '../../products/services/beer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Beer } from 'src/app/products/models/beer';

@Component({
  selector: 'app-update-beer',
  templateUrl: './update-beer.component.html',
  styleUrls: ['./update-beer.component.css']
})
export class UpdateBeerComponent implements OnInit {

  id:number;
  beer=new Beer();
  errorMessage="";
  constructor(private beerService:BeerService, private route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.beerService.getBeerById(this.id).subscribe(data=>{
      this.beer=data;
    },
    error=>{
      console.log(error);
    });
  }

  updateBeer(){
    this.beerService.updateBeer(this.id,this.beer).subscribe(
      data=>{ 
        this._router.navigate(['admin-panel']);
        console.log("Update cu succes"+data);
      },
      error=>{
        console.log("A aparut o eroare");

        this.errorMessage=error.error;
      }
    )
  }
}

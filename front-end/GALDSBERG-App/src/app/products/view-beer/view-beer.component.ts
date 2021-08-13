import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Beer } from '../models/beer';
import { BeerService } from '../services/beer.service';
import { MessengerService } from '../services/messenger.service';

@Component({
  selector: 'app-view-beer',
  templateUrl: './view-beer.component.html',
  styleUrls: ['./view-beer.component.css']
})
export class ViewBeerComponent implements OnInit {

  id:number;
  beer=new Beer();
  constructor(private route: ActivatedRoute,private beerService:BeerService,
    private _router: Router,private messenger: MessengerService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.beerService.getBeerById(this.id).subscribe(data=>{
      this.beer=data;
    },
    error=>{
      console.log(error);
    });
  }
  addToCartHandle(){
    console.log("Berea trimisa in cart este: "+this.beer.name);
    this.messenger.sendMessage(this.beer); //trimite berea catre cart
  }

}

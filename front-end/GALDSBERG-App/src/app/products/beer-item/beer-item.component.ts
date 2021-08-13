import { Component, Input, OnInit } from '@angular/core';
import { Beer } from '../models/beer';
import { MessengerService } from '../services/messenger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beer-item',
  templateUrl: './beer-item.component.html',
  styleUrls: ['./beer-item.component.css']
})
export class BeerItemComponent implements OnInit {

  @Input() beer:Beer;
  constructor(private messenger: MessengerService,private _router: Router) { }

  ngOnInit(): void {
  }

  addToCartHandle(){
    console.log("Berea trimisa in cart este: "+this.beer.name);
    this.messenger.sendMessage(this.beer); //trimite berea catre cart
  }

  viewBeer(id:number){
    this._router.navigate(['/products/view-beer',id]);
  }

}

import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/products/models/beer';
import { MessengerService } from 'src/app/products/services/messenger.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems=[];
  cartTotal :number;


  constructor(private messenger:MessengerService,private _router: Router) { }
  


  ngOnInit(): void {
    this.cartItems=JSON.parse(localStorage.getItem("cart"));
    this.cartTotal=this.makeTotal();
    console.log(this.cartItems);
    this.checkIfCartIsEmpty();
    this.messenger.getMessage().subscribe((beer:Beer)=>{
      this.addBeerToCart(beer);
    })
  }

  checkIfCartIsEmpty(){
    if(this.cartItems.length === 0){
      return true;
    }
    return false;
  }

  addBeerToCart(beer: Beer) {

    let beerExists = false

    for (let i in this.cartItems) {
      if (this.cartItems[i].beerCart.id === beer.id) {
        this.cartItems[i].qty++
        beerExists = true
        break;
      }
    }

    if (!beerExists) {
      this.cartItems.push({
        beerCart:beer,
        qty: 1,
      })
    }
  
    this.makeTotal();

    localStorage.setItem('cart',JSON.stringify(this.cartItems));

  }

  makeTotal(){
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.beerCart.price)
    })
    return this.cartTotal;
  }

  deleteBeer(item:any){
    for (let i in this.cartItems) {
      if (this.cartItems[i].beerCart.id === item.beerCart.id) {
        this.cartItems[i].qty--;
        if(this.cartItems[i].qty === 0){
          this.cartItems.splice(this.cartItems.indexOf(this.cartItems[i],0),1);
        }
        break;
      }
    }
    
    console.log("Bere stearsa din cos");
    this.makeTotal();
    localStorage.setItem('cart',JSON.stringify(this.cartItems));

  }

  addBeer(item:any){
    for (let i in this.cartItems) {
      if (this.cartItems[i].beerCart.id === item.beerCart.id) {
        this.cartItems[i].qty++;
        break;
      }
    }
    
    console.log("Bere adaugata in cos");
    this.makeTotal();
    localStorage.setItem('cart',JSON.stringify(this.cartItems));

  }

  goToSendOrder(){
    this._router.navigate(['send-order']);
  }


}

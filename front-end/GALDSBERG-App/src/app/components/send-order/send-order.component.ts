import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../models/order';
import { OrderServiceService } from '../service/order-service.service';
import { EmailService } from '../service/email.service';
import { Email } from '../models/email';

@Component({
  selector: 'app-send-order',
  templateUrl: './send-order.component.html',
  styleUrls: ['./send-order.component.css']
})
export class SendOrderComponent implements OnInit {

  order=new Order();
  cartItems=[];
  cartTotal :number;
  orderConfirmed:boolean;
  mail :Email = new Email();
  constructor(private _router:Router,private orderService:OrderServiceService,private emailSerive:EmailService) { 
   
  }

  ngOnInit(): void {
    this.cartItems=JSON.parse(localStorage.getItem("cart"));
    this.cartTotal=this.makeTotal();
    this.orderConfirmed=false;
    this.checkCartIsEmpty();
    
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
  makeTotal(){
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.beerCart.price)
    })
    return this.cartTotal;
  }

  viewBeer(id:number){
    console.log("Vreau sa vad berea");
    this._router.navigate(['/products/view-beer',id]);
  }

  sendOrder(){
    
    this.orderConfirmed=true;
    this.order.total=this.makeTotal();
    this.orderService.registerOrder(this.order).subscribe(
      data=>{
        console.log("Comanda inregistrata cu succes!");
      },
      error=>{
        console.log("Eroarea este: " + error.message);
      }
    )
    this.mail.message="Ati comandat de la GALDSBERG shop. Totalul comenzii este "+this.order.total+
    ".\n Comanda va fi trimisa la adresa: "+this.order.address;
    this.mail.subject="Comanda noua GALDSBERG shop.";
    this.mail.receiver=this.order.email;
    this.mail.sender="proiectpaw2020@gmail.com";
    this.emailSerive.enviarEmail(this.mail).subscribe(
      data=>{
        console.log("Comanda a fost trimisa prin email.");
      },
      error=>{
        console.log(error.message);
      }
    )
    setTimeout(()=>{
      this.orderConfirmed=false;
      this._router.navigate(['']);
    },5000
    )
    
  }

  checkCartIsEmpty(){
    if(this.cartItems.length === 0){
      return true;
    }
    return false;
  }
}

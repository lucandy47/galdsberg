import { User } from './../../authentication/models/user';
import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/authentication/services/registration.service';
import { OrderServiceService } from '../service/order-service.service';
import { Order } from '../models/order';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  user=new User();
  orderList:Order[];
  errorMessage='';
  id:number;
  option:string;
  constructor(private _service:RegistrationService, private orderService:OrderServiceService) { }

  ngOnInit(): void {
    this.user=this._service.getLoggedInUser();
    this.id=this.user.id;
    this.option="profile";
    this.getOrders();
  }

  updateUser(){
    this._service.updateUserFromService(this.id,this.user).subscribe(
      data=>{ 
        console.log("Update cu succes"+data);
        sessionStorage.setItem('user',JSON.stringify(data));
      },
      error=>{
        console.log("A aparut o eroare");

        this.errorMessage=error.error;
      }
    )
  }

  getOrders(){
    console.log("User "+this.user.email);
    this.orderService.getOrdersByEmail(this.user.email).subscribe(
      data=>{
        this.orderList=data;
        console.log("Comenzile mele sunt : "+ this.orderList);
      },
      error=>{
        console.log(error.message);
      }
    )
  }

 setOptionProfile(){
   this.option="profile";
   console.log(this.option);
 }
 setOptionOrders(){
  this.option="orders";
  console.log(this.option);
}
  
  

}

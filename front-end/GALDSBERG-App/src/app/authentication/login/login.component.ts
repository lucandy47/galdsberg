import { Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { RegistrationService } from '../services/registration.service';
import { User } from '../models/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token:string;
  user=new User();
  errorMessage='';
  constructor(private _service:RegistrationService,private _route:Router) { }

  ngOnInit(): void {
  }

  loginUser(){
      this._service.loginUserFromService(this.user).subscribe(
        data=>{
          console.log("response recieved")
          localStorage.setItem('token',JSON.stringify(data)); //seteaza tokenul pt autentificare
          this._service.getUser(this._service.getToken()).subscribe( //preia tokenul de autentificare pt autentificarea userului
            data=>{
              localStorage.setItem('user',JSON.stringify(data));
              console.log('User is logged in.'+data);
              this._route.navigate(['']);
            },
            error=>{
              console.log(error.message);
              this.errorMessage="Username or password wrong!";
            }
          )
          
        },
        error=>{
          console.log(this.user);
          console.log("exception occured"+ error.error);
          this.errorMessage="Username or password wrong!";
          }
      )
      
      
  }

}

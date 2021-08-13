import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { RegistrationService } from '../services/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user=new User();
  errorMessage='';
  constructor(private service :RegistrationService,private route: Router) { }

  ngOnInit(): void {
  }
   registerUser(){
    this.service.registerUserFromService(this.user).subscribe(
      data=>{
        
        console.log("inregistrare cu succes");
        this.route.navigate(['/login']);
      },
      error=>{
        console.log("A aparut o eroare");

        this.errorMessage=error.error;
      }
    )
  }

}

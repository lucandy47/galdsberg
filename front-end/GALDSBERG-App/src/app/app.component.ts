import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './authentication/services/registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(public _service:RegistrationService){}

  ngOnInit(): void {
    let cart=localStorage.getItem('cart');
    console.log(cart);
    if(cart===null){
      localStorage.setItem('cart',JSON.stringify([]));
    }
  }
  title = 'GALDSBERG-App';

  
}

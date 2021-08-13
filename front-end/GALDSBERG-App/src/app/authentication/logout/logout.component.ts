import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _service:RegistrationService,private _route:Router) { }

  ngOnInit(): void {
    this._service.logOut();
    this._route.navigate(['login']);
  }

}

import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RegistrationService } from './registration.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService implements CanActivate {

  constructor(private _router:Router,private _service:RegistrationService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this._service.isUserLoggedIn()){
      
      return true;
    }

    this._router.navigate(['login']);
    console.log("Redirected to login page");
    return false;
  }
}

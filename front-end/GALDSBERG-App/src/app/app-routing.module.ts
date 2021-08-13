
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import { AuthenticationGuardService } from './authentication/services/authentication-guard.service';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { UpdateBeerComponent } from './components/update-beer/update-beer.component';
import { AddBeerComponent } from './components/add-beer/add-beer.component';
import { SupportComponent } from './components/support/support.component';
import { SendOrderComponent } from './components/send-order/send-order.component';

const routes: Routes = [
  {path:'',component:HomeComponent, pathMatch:'full'},
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(mod => mod.ProductsModule)
  },
  {path:'contact',component:ContactPageComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegistrationComponent},
  {path:'logout',component:LogoutComponent, canActivate:[AuthenticationGuardService]},
  {path:'my-profile',component:MyProfileComponent, canActivate:[AuthenticationGuardService]},
  {path:'admin-panel',component:AdminPanelComponent, canActivate:[AuthenticationGuardService]},
  {path:'update-beer/:id',component:UpdateBeerComponent, canActivate:[AuthenticationGuardService]},
  {path:'add-beer',component:AddBeerComponent, canActivate:[AuthenticationGuardService]},
  {path:'support',component:SupportComponent},
  {path:'send-order',component:SendOrderComponent}
 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

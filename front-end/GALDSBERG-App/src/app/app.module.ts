import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import {FormsModule} from '@angular/forms';
import { LogoutComponent } from './authentication/logout/logout.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { UpdateBeerComponent } from './components/update-beer/update-beer.component';
import { AddBeerComponent } from './components/add-beer/add-beer.component';
import { SupportComponent } from './components/support/support.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { SendOrderComponent } from './components/send-order/send-order.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactPageComponent,
    LoginComponent,
    RegistrationComponent,
    LogoutComponent,
    MyProfileComponent,
    AdminPanelComponent,
    UpdateBeerComponent,
    AddBeerComponent,
    SupportComponent,
    SendOrderComponent    
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

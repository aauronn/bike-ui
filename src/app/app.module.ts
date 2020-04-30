import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BikeService } from './services/bike.service';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { CustomerService } from './services/customer.service';
import { CustomerDetailComponent } from './components/customer/customer-detail/customer-detail.component';
// import { CallbackComponent } from './components/callback/callback.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    ViewRegistrationComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    // CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    BikeService,
    CustomerService
    // AuthService,
    // AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

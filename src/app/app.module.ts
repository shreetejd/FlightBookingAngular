import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
 import { HttpClientModule } from '@angular/common/http';
import { UserAdminServiceService } from './user-admin-service.service';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginServicesService } from './login-services.service';
import { RegisterFlightComponent } from './register-flight/register-flight.component';
import { FlightRegisterServicesService } from './flight-register-services.service';
import { GetFlightsComponent } from './get-flights/get-flights.component';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import{OverlayModule} from "@angular/cdk/overlay";
import { EditFLightComponent } from './edit-flight/edit-flight.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { GetSearchFlightComponent } from './get-search-flight/get-search-flight.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { MyBookingComponent } from './my-booking/my-booking.component';
import { DiscoutCoupenComponent } from './discout-coupen/discout-coupen.component' 


@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    LoginFormComponent,
    RegisterFlightComponent,
    GetFlightsComponent,
    EditFLightComponent,
    SearchFlightComponent,
    GetSearchFlightComponent,
    BookingHistoryComponent,
    BookTicketComponent,
    MyBookingComponent,
    DiscoutCoupenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,HttpClientModule,OverlayModule
  ],
  providers: [UserAdminServiceService,MdbModalService,LoginServicesService,FlightRegisterServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

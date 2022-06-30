import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFlightComponent } from './register-flight/register-flight.component';
import { GetFlightsComponent } from './get-flights/get-flights.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { GetSearchFlightComponent } from './get-search-flight/get-search-flight.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { MyBookingComponent } from './my-booking/my-booking.component';
import { DiscoutCoupenComponent } from './discout-coupen/discout-coupen.component';
const routes: Routes = [
  {
    path:'register',
    component: RegisterFormComponent
  },
  {
    path:'Login',
    component: LoginFormComponent
  },
  {
    path:'AddFlight',
    component: RegisterFlightComponent
  },
  {
    path:'getFlight',
    component: GetFlightsComponent
  },
  {
    path:'searchFlight',
    component: SearchFlightComponent
  },
  {
    path:'getSeachFlight',
    component: GetSearchFlightComponent
  },
  {
    path:'bookingHistory',
    component: BookingHistoryComponent
  },
  {
    path:'myBookings',
    component: MyBookingComponent
  },
  {
    path:'AddCoupen',
    component: DiscoutCoupenComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

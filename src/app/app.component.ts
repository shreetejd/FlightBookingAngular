import { Component } from '@angular/core';
// import { userInfo } from 'os';
import { LoginServicesService } from './login-services.service';
import { UserAdminServiceService } from './user-admin-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FlightBookingNew';
  
  //  _userService: new LoginServicesService;
  
  isAdmin: boolean = false;
  constructor(userService:LoginServicesService) {
    this.isAdmin = userService.UserRole;
     
  }
  
  // onLogout():void{
  //   localStorage.clear();
  // }
  ngOnInit(): void {
   
  }
}

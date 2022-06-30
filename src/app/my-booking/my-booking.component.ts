import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightRegisterServicesService } from '../flight-register-services.service';
import { LoginServicesService } from '../login-services.service';

@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.css']
})
export class MyBookingComponent implements OnInit {
  dataList:any;
  isAdmin:boolean;
  // email :string = localStorage.getItem('email').toString()
  constructor(private router:Router,private _flightservices:FlightRegisterServicesService,private loginService:LoginServicesService) {
  this.isAdmin=loginService._userRole;
    _flightservices.historybyEmail(loginService._email)
      .subscribe((data:any)=>{
        // this.test = JSON.parse(data),
        // alert('email:'+ this.test.name),
        this.dataList = data
      })
   }

   cancel(PnrNumber:string) : void{
    confirm("are you sure to Cancel "+ PnrNumber);
    this._flightservices.CancelTicket(PnrNumber)
    .subscribe((data:HttpStatusCode)=>{
      
    alert(data.toString())
    
    });
    
    this._flightservices.historybyEmail(this.loginService._email)
    .subscribe((data:any)=>{
      // this.test = JSON.parse(data),
      // alert('email:'+ this.test.name),
      this.dataList = data
    })

  }
   onLogout():void{
    localStorage.clear();
  }

  ngOnInit(): void {
    if(localStorage.getItem('email')==null){
      this.router.navigate([''])
  }
  }
}

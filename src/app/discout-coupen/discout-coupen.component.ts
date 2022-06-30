import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CoupenDetails } from '../CouponDetails';
import { FlightRegisterServicesService } from '../flight-register-services.service';
import { LoginServicesService } from '../login-services.service';
import { UserAdminServiceService } from '../user-admin-service.service';

@Component({
  selector: 'app-discout-coupen',
  templateUrl: './discout-coupen.component.html',
  styleUrls: ['./discout-coupen.component.css']
})
export class DiscoutCoupenComponent implements OnInit {
  discountForm : any;
  coupen: CoupenDetails ;
  isAdmin:boolean;
  constructor(loginservice:LoginServicesService,private formBuilder : FormBuilder, private _flightServices : FlightRegisterServicesService, private router:Router) { 
    this.isAdmin=loginservice.UserRole;
    this.CreateForm();
    this.coupen = {
      Coupen:'',
      discountAmount:0
    };
  }
  CreateForm(){
    this.discountForm = this.formBuilder.group({
      'Coupen':['',Validators.required],
      'discountAmount':[,Validators.required],
      
    })
  }
  
  onSubmit() : void {
   
    if(this.discountForm.dirty && this.discountForm.valid)
    {
      this.coupen = {
        Coupen : this.discountForm.value.Coupen,
        discountAmount: this.discountForm.value.discountAmount,
        
      }
    }
    this._flightServices.AddCoupen(this.coupen)
    .subscribe((data:HttpStatusCode)=>
    alert(data.toString()))
    
    // this.router.navigate(['/','Login'])
    // console.log(data)    
   
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

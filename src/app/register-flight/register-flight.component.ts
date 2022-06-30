import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightRegisterServicesService } from '../flight-register-services.service';
import { FlightDetails } from '../FlightDetails';
import { LoginServicesService } from '../login-services.service';

@Component({
  selector: 'app-register-flight',
  templateUrl: './register-flight.component.html',
  styleUrls: ['./register-flight.component.css']
})
export class RegisterFlightComponent implements OnInit {

  FLightForm : any;
  flight: FlightDetails ;
  isAdmin:boolean;
  constructor(private formBuilder : FormBuilder, private _flightRegisterService : FlightRegisterServicesService, private router:Router,loginservice:LoginServicesService) { 
    this.isAdmin=loginservice.UserRole;
    this.CreateForm();
    this.flight = {
      FlightNumber : 0,
      Airline : '',
      FromPlace:'',
      ToPlace:'',
      StartTime:new Date(),
      EndTime:new Date(),
      Days:'',
      Instruments : '',
      BusinessSeatCount : 0,
      NonBusinessSeatCount:0,
      Cost:0,
      IsBlocked:false,
      Meal:'',
    };
  }
  CreateForm(){
    this.FLightForm = this.formBuilder.group({
      'FlightNumber':['',Validators.required],
      'Airline':['',Validators.required],
      'FromPlace':['',Validators.required],
      'ToPlace':['',Validators.required],
      'StartTime':['',Validators.required],
      'EndTime':['',Validators.required],
      'Days': [,Validators.required],
      'Instruments':[,Validators.required],
      'BusinessSeatCount':[0,Validators.required],
      'NonBusinessSeatCount': [0,Validators.required],
      'Cost':[0,Validators.required],
      'IsBlocked': [false,Validators.required],
      'Meal':['',Validators.required]


    })
  }
  
  onSubmit() : void {
   
    if(this.FLightForm.dirty && this.FLightForm.valid)
    {
      this.flight = {
        FlightNumber : this.FLightForm.value.FlightNumber,
        Airline: this.FLightForm.value.Airline,
        FromPlace:this.FLightForm.value.FromPlace,
        ToPlace:this.FLightForm.value.ToPlace,
        StartTime:this.FLightForm.value.StartTime,
        EndTime:this.FLightForm.value.EndTime,
        Days:this.FLightForm.value.Days,
        Instruments: this.FLightForm.value.Instruments,
        BusinessSeatCount:this.FLightForm.value.BusinessSeatCount,
        NonBusinessSeatCount:this.FLightForm.value.NonBusinessSeatCount,
        Cost:this.FLightForm.value.Cost,
        IsBlocked:this.FLightForm.value.IsBlocked,
        Meal:this.FLightForm.value.Meal
      }
    }
    this._flightRegisterService.InsertFlight(this.flight)
    .subscribe((data:HttpStatusCode)=>
    alert(data.toString()))
    // console.log(data)    
   
  }

  onbutton():void{
    this.router.navigate(['/','getFlight'])
  }

  onLogout():void{
    localStorage.clear();
  }
  ngOnInit(): void {
    // alert(localStorage.getItem('email'))
    if(localStorage.getItem('email')==null){
      this.router.navigate([''])
    }
  }

}

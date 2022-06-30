import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

import { FlightRegisterServicesService } from '../flight-register-services.service';
import { FlightDetails } from '../FlightDetails';
import { GetFlightsComponent } from '../get-flights/get-flights.component';

@Component({
  selector: 'app-edit-flight',
  templateUrl: './edit-flight.component.html',
  styleUrls: ['./edit-flight.component.css']
})
export class EditFLightComponent implements OnInit {

  // title: number | null = null;
    Id: number =0;
  dataval:any = [];
  //  airlineList:Array<FlightDetails> = [];
  FLightForm : any;
  flight: FlightDetails ;
  

  constructor(public modalRef: MdbModalRef<EditFLightComponent>,private formBuilder : FormBuilder, private _flightRegisterService : FlightRegisterServicesService, private router:Router) { 
  this.Id = this._flightRegisterService._FlightNum;
    console.log(this.Id);
    this._flightRegisterService.getFlightbyId(this.Id)
    .subscribe((data:any)=>{
      
      console.log(data['FlightNumber'])
      this.dataval = data
  })
    
    

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
    
      this.FLightForm.controls["FlightNumber"].setValue(this.dataval['FlightNumber']);
      this.FLightForm.controls["Airline"].setValue(this.dataval['Airline']);
      this.FLightForm.controls["FromPlace"].setValue(this.dataval['FromPlace']);
      this.FLightForm.controls["ToPlace"].setValue(this.dataval['ToPlace']);
      this.FLightForm.controls["StartTime"].setValue(this.dataval['StartTime']);
      this.FLightForm.controls["EndTime"].setValue(this.dataval['EndTime']);
      this.FLightForm.controls["Days"].setValue(this.dataval['Days']);
      this.FLightForm.controls["Instruments"].setValue(this.dataval['Instruments']);
      this.FLightForm.controls["BusinessSeatCount"].setValue(this.dataval['BusinessSeatCount']);
      this.FLightForm.controls["NonBusinessSeatCount"].setValue(this.dataval['NonBusinessSeatCount']);
      this.FLightForm.controls["Cost"].setValue(this.dataval['Cost']);
      this.FLightForm.controls["IsBlocked"].setValue(this.dataval['IsBlocked']);
      this.FLightForm.controls["IsBlocked"].setValue(this.dataval['Meal']);
  }
  CreateForm(){
    
    this.FLightForm = this.formBuilder.group({
      'FlightNumber':[,Validators.required],
      'Airline':[,Validators.required],
      'FromPlace':[,Validators.required],
      'ToPlace':[,Validators.required],
      'StartTime':[,Validators.required],
      'EndTime':[,Validators.required],
      'Days': [,Validators.required],
      'Instruments':[,Validators.required],
      'BusinessSeatCount':[,Validators.required],
      'NonBusinessSeatCount': [,Validators.required],
      'Cost':[,Validators.required],
      'IsBlocked': [false,Validators.required],
      'Meal':[,Validators.required]

    })
    
  }
  
  LoadEditData(code:number){
    console.log(code);
  }

  onSubmit() : void {
   
    
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
    
    this._flightRegisterService.updateFlight(this.flight)
    .subscribe((data:HttpStatusCode)=>
    alert(data.toString()))
    // console.log(data)    
   
  }

  
  close(): void {
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage)
  }
  ngOnInit(): void {
    // this._flightRegisterService.getFlightbyId(2)
    // .subscribe((data:any)=>{
    //   console.log(data)
    // this.dataval=data})
    if(localStorage.getItem('email')==null){
      this.router.navigate([''])
    }
  }

}

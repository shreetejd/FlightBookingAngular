import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { FlightRegisterServicesService } from '../flight-register-services.service';
import { FlightDetails } from '../FlightDetails';
import { LoginServicesService } from '../login-services.service';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {

  flight: FlightDetails ;
  searchFLightForm: any;
  dataList : any =[];
  edited: boolean = true;
  booktype:string='oneway';
  isAdmin:boolean;
  constructor(loginservice:LoginServicesService,private formBuilder : FormBuilder, private _flightRegisterService : FlightRegisterServicesService, private router:Router) { 
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
    this.searchFLightForm = this.formBuilder.group({
      'FromPlace':['',Validators.required],
      'ToPlace':['',Validators.required],
      'StartTime':['',Validators.required],
      'BookType':['',Validators.required]
    })
  }

  onSubmit():void{
    if(this.searchFLightForm.dirty && this.searchFLightForm.valid)
    {
      this.flight = {
        FromPlace : this.searchFLightForm.value.FromPlace,
        ToPlace: this.searchFLightForm.value.ToPlace,
        StartTime:this.searchFLightForm.value.StartTime,

        FlightNumber : 0,
        Airline: '',
       
        EndTime:new Date(),
        Days:'',
        Instruments: '',
        BusinessSeatCount:0,
        NonBusinessSeatCount:0,
        Cost:0,
        IsBlocked:false,
        Meal:''
      }
    }

// alert(this.flight.FromPlace+' '+this.flight.ToPlace+' '+this.flight.StartTime)
    this._flightRegisterService.SearchFlight(this.flight,this.booktype)
    .subscribe((data:any)=>{
      // alert(data),
    this.dataList=data,
  this._flightRegisterService._datalist=this.dataList,
  this.router.navigate(['/','getSeachFlight'])
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

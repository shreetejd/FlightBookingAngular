import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from './Booking';
import { CoupenDetails } from './CouponDetails';
import { FlightDetails } from './FlightDetails';

@Injectable({
  providedIn: 'root'
})
export class FlightRegisterServicesService {
  _FlightNum:number = 0;
  get Flightnum():number{
    return this._FlightNum;
  }
  set Flightnum(value:number){
    this._FlightNum=value;
  }

  _FlightCost:number = 0;
  get FLightCost():number{
    return this._FlightCost;
  }
  set FLightCost(value:number){
    this._FlightCost=value;
  }

_datalist : any;
get SearchFlightResult():number{
  return this._datalist;
}
set SearchFlightResult(value:number){
  this._datalist=value;
}

_FlightBookId : number=0;
get FlightBookId():number{
  return this._FlightBookId;
}
set FlightBookId(value:number){
  this._FlightBookId=value;
}


  baseUrl : string;
  
  url : string ='';
  constructor(private _http: HttpClient) {
    this.baseUrl='http://localhost:4000/Auth/';
    
    
   }

  InsertFlight(model: FlightDetails): Observable<any> {  
    this.url = this.baseUrl+ 'AddFlight?FlightNumber='+model.FlightNumber+'&Airline='+model.Airline+'&FromPlace='+model.FromPlace+'&ToPlace='+model.ToPlace+'&StartTime='+model.StartTime+'&EndTime='+model.EndTime+'&Days='+model.Days+'&Instruments='+model.Instruments+'&BusinessSeatCount='+model.BusinessSeatCount+'&NonBusinessSeatCount='+model.NonBusinessSeatCount+'&Cost='+model.Cost+'&IsBlocked='+model.IsBlocked+'&Meal='+model.Meal;
       
    let headers = new Headers({'Authorization': 'Bearer '+localStorage.getItem("token")});   
    return this._http.post(this.url,{Headers:headers},{responseType:'text'} )  ;
        

} 
getFlight():Observable<any>{
  this.url = this.baseUrl+ 'GetFlight';
       
  let headers = new Headers({'Authorization': 'Bearer '+localStorage.getItem("token")});    
    return this._http.get(this.url)  ;
}

getFlightbyId(model:number):Observable<any>{
  this.url = this.baseUrl+ 'GetFlightbyID?FlightNumber='+model;
       
  let headers = new Headers({'Authorization': 'Bearer '+localStorage.getItem("token")});   
  return this._http.get(this.url)  ;
}
DeleteFlight(model:number):Observable<any>{
  this.url = this.baseUrl+ 'DeleteFlight/?FlightNumber='+model.toString();
       
  let headers = new Headers({'Authorization': 'Bearer '+localStorage.getItem("token")});  
    return this._http.post(this.url,{Headers:headers},{responseType:'text'})  ;
}
updateFlight(model: FlightDetails): Observable<any> {  
  this.url = this.baseUrl+ 'UpdateFlight?FlightNumber='+model.FlightNumber+'&Airline='+model.Airline+'&FromPlace='+model.FromPlace+'&ToPlace='+model.ToPlace+'&StartTime='+model.StartTime+'&EndTime='+model.EndTime+'&Days='+model.Days+'&Instruments='+model.Instruments+'&BusinessSeatCount='+model.BusinessSeatCount+'&NonBusinessSeatCount='+model.NonBusinessSeatCount+'&Cost='+model.Cost+'&IsBlocked='+model.IsBlocked+'&Meal='+model.Meal;
     
  let headers = new Headers({'Authorization': 'Bearer '+localStorage.getItem("token")});   
  return this._http.post(this.url,{Headers:headers},{responseType:'text'} )  ;
}
AddCoupen(model: CoupenDetails): Observable<any> {  
  this.url = this.baseUrl+ 'AddCoupen?Coupen='+model.Coupen+'&discountAmount='+model.discountAmount;
     
  let headers = new Headers({'Authorization': 'Bearer '+localStorage.getItem("token")});   
  return this._http.post(this.url,{Headers:headers},{responseType:'text'} )  ;
      

} 
//--------------

SearchFlight(model: FlightDetails,trip:string): Observable<any> {  
  this.url = this.baseUrl+ 'SearchFlight/?FlightDateTime='+model.StartTime+'&from='+model.FromPlace+'&to='+model.ToPlace+'&bookType='+trip;
     
  let headers = new Headers({'Authorization': 'Bearer '+localStorage.getItem("token")});   
  return this._http.get(this.url)  ;
}

historybyEmail(email:string): Observable<any> {  
  this.url = this.baseUrl+ 'SearchBooking?email='+email;
     
  let headers = new Headers({'Authorization': 'Bearer '+localStorage.getItem("token")});   
  return this._http.post(this.url,{Headers:headers})  ;
}


historybyPnr(pnrNumber:string): Observable<any> {  
  this.url = this.baseUrl+ 'SearchPnr?PnrNumber='+pnrNumber;
     
  let headers = new Headers({'Authorization': 'Bearer '+localStorage.getItem("token")});   
  return this._http.get(this.url)  ;
}

BookTicket(model: Booking): Observable<any> {  
  this.url = this.baseUrl+ 'BookTicket/?Name='+model.Name+'&Email='+model.Email+'&TotalSeat='+model.TotalSeat+'&PassingerDetails='+model.PassingerDetails+'&MealType='+model.MealType+'&SeatNumbers='+model.SeatNumbers+'&BookType='+model.BookType+'&FlightId='+model.FlightId+'&Cost='+model.Cost;
     
  let headers = new Headers({'Authorization': 'Bearer '+localStorage.getItem("token")});   
  return this._http.post(this.url,{Headers:headers},{responseType:'text'} )  ;
}

CancelTicket(model:string):Observable<any>{
  this.url = this.baseUrl+ 'CancelTicket?pnrNumber='+model;
       
  let headers = new Headers({'Authorization': 'Bearer '+localStorage.getItem("token")});  
    return this._http.post(this.url,{Headers:headers},{responseType:'text'})  ;
}

GetCoupen(coupen:string): Observable<any> {  
  this.url = this.baseUrl+ 'GetCoupen?Coupen='+coupen;
     
  let headers = new Headers({'Authorization': 'Bearer '+localStorage.getItem("token")});   
  return this._http.get(this.url)  ;
}


}

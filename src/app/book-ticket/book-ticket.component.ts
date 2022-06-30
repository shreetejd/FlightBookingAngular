import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { FlightRegisterServicesService } from '../flight-register-services.service';
import { Booking } from '../Booking';
import { HttpStatusCode } from '@angular/common/http';
import { LoginServicesService } from '../login-services.service';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {

  discountamt:number=0;
PassCount = 0;
  Id: number =0;
  dataval:any = [];
  //  airlineList:Array<FlightDetails> = [];
  BookForm : any;
  flight: Booking ;
  isAdmin:boolean;
  flightCost:number = 0
  tempCost:number = 0

  constructor(private loginService : LoginServicesService,public modalRef: MdbModalRef<BookTicketComponent>,private formBuilder : FormBuilder, private _flightRegisterService : FlightRegisterServicesService, private router:Router) { 
  this.Id = this._flightRegisterService._FlightBookId;
  this.flightCost = this._flightRegisterService._FlightCost;
    console.log(this.Id);
    this.isAdmin = loginService._userRole;
    this.CreateForm();
    this.flight = {

      Name : '',
      Email : '',
      TotalSeat:0,
      PassingerDetails:'',
      MealType:'',
      SeatNumbers:'',
      BookType:'',
      FlightId : 0,
      PnrNumber:'',
      BookingStatus:'',
      Cost :0
    };
    
     
  }
  CreateForm(){
    
    this.BookForm = this.formBuilder.group({
      'Name':[,Validators.required],
      'Email':[,Validators.required],
      'TotalSeat':[,Validators.required],
      'PassingerName':[,Validators.required],
      'Age':[,Validators.required],
      'PassingerName2':[],
      'Age2':[],
      'PassingerName3':[],
      'Age3':[],
      'MealType':[,Validators.required],
      'SeatNumber': [,Validators.required],
      'BookType':[,Validators.required],
      'Coupen':[],
      'Cost':[this.flightCost,Validators.required]
    })
    
  }
  
  

  onSubmit() : void {
   
    console.log(('{"Name":'+this.BookForm.value.Name +',"Age":'+ this.BookForm.value.Age+'}').toString())
    console.log(this.BookForm.value.TotalSeat)
  if(this.PassCount ==1)
    {
      this.flight = {
        Name : this.BookForm.value.Name,
        Email: this.BookForm.value.Email,
        TotalSeat:this.BookForm.value.TotalSeat,
        PassingerDetails:('{"Name":'+this.BookForm.value.PassingerName +',"Age":'+ this.BookForm.value.Age+'}').toString(),
        MealType:this.BookForm.value.MealType,
        SeatNumbers:this.BookForm.value.SeatNumber,
        BookType:this.BookForm.value.BookType,
        FlightId: this.Id,
        PnrNumber:'',
        BookingStatus:'',
        Cost: this.BookForm.value.Cost
      }
    }
    else if(this.PassCount ==2){
      this.flight = {
        Name : this.BookForm.value.Name,
        Email: this.BookForm.value.Email,
        TotalSeat:this.BookForm.value.TotalSeat,
        PassingerDetails:('{"Name":'+this.BookForm.value.PassingerName +',"Age":'+ this.BookForm.value.Age+'}'+'{"Name":'+this.BookForm.value.PassingerName2 +',"Age":'+ this.BookForm.value.Age2+'}').toString(),
        MealType:this.BookForm.value.MealType,
        SeatNumbers:this.BookForm.value.SeatNumber,
        BookType:this.BookForm.value.BookType,
        FlightId: this.Id,
        PnrNumber:'',
        BookingStatus:'',
        Cost: this.BookForm.value.Cost
      }
    }
    else if(this.PassCount ==3){
      this.flight = {
        Name : this.BookForm.value.Name,
        Email: this.BookForm.value.Email,
        TotalSeat:this.BookForm.value.TotalSeat,
        PassingerDetails:('{"Name":'+this.BookForm.value.PassingerName +',"Age":'+ this.BookForm.value.Age+'}'+'{"Name":'+this.BookForm.value.PassingerName2 +',"Age":'+ this.BookForm.value.Age2+'}'+'{"Name":'+this.BookForm.value.PassingerName3 +',"Age":'+ this.BookForm.value.Age3+'}').toString(),
        MealType:this.BookForm.value.MealType,
        SeatNumbers:this.BookForm.value.SeatNumber,
        BookType:this.BookForm.value.BookType,
        FlightId: this.Id,
        PnrNumber:'',
        BookingStatus:'',
        Cost: this.BookForm.value.Cost
      }
    }
    
    
    this._flightRegisterService.BookTicket(this.flight)
    .subscribe((data:HttpStatusCode)=>
    alert(data.toString()))
    // console.log(data)    
   
  }

  
  close(): void {
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage)
  }
  onLogout():void{
    localStorage.clear();
  }
  ngOnInit(): void {
    if(localStorage.getItem('email')==null){
      this.router.navigate([''])
    }
  }
  
  // PassengerForm:any;

  // Passengers() : FormArray {
  //   return this.PassengerForm.get("Passengers") as FormArray
  // }

  // newPassenger() : FormGroup{
  //   return this.formBuilder.group({
  //     PassingerName:'',
  //       Age:0

  //   })
  // }

  // addPassengers() {
  //   this.Passengers().push(this.newPassenger());
  // }

  // removePassengers(i:number){
  //   this.Passengers().removeAt(i);
  // }
onChange(event: any){
  console.log(event.target.value);
this.PassCount = event.target.value;
this.tempCost = this.flightCost;
this.tempCost = this.tempCost*this.PassCount;
this.BookForm.patchValue({

  Cost: this.tempCost
})

}
onKeyUpEvent(event: any){
  this._flightRegisterService.GetCoupen(event.target.value)
  .subscribe((data: any)=>{
    
    // alert('pnr:'+ JSON.stringify(data)),
    if(!data.toString().includes('valid')){
    // let dataVal = JSON.parse(data);
    this.discountamt=data['discountAmount']
    }
    else
    alert(data)
  });
  this.BookForm.patchValue({

    Cost: this.tempCost - this.discountamt
  })
}
}

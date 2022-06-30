import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Booking } from '../Booking';
import { FlightRegisterServicesService } from '../flight-register-services.service';
import { UserAdminServiceService } from '../user-admin-service.service';
import { HistoryInput } from '../History';
import { History } from '../History';
import { LoginServicesService } from '../login-services.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {
HistoryForm: any;
_history:History;
dataList:any;
test: any;
historyInput : HistoryInput;

isAdmin:boolean;
  constructor(loginservice:LoginServicesService,private formBuilder : FormBuilder, private _flightservices : FlightRegisterServicesService, private router:Router)
   {
    this.isAdmin=loginservice.UserRole;
    this.CreateForm();
       this.historyInput = {
         Email:'',
         PnrNumber:''
       }
       this._history={
        BookingID:0,
        Name:'',
        Email:'',
        TotalSeat:0,
        PassingerDetails:'',
        MealType:'',
        SeatNumbers:'',
        PnrNumber:'',
        BookingStatus:'',
        BookType:'',
        BookingTime: new Date,

        FlightId:0,
        Airline:''
       }

   }


  onSubmit(): void{
    this.historyInput = {
      Email:this.HistoryForm.value.Email,
      PnrNumber:this.HistoryForm.value.PnrNumber
    }
   
  // this.pnrNumber =this.HistoryForm.value.pnrNumber;

   if(this.historyInput.Email!='' ){
     
     this._flightservices.historybyEmail(this.historyInput.Email)
      .subscribe((data:any)=>{
        this.test = JSON.parse(data),
        // alert('email:'+ this.test.name),
        this._history = data
      })
   }
   else{
    //  alert(this.historyInput.PnrNumber);
    this._flightservices.historybyPnr(this.historyInput.PnrNumber)
    .subscribe((data: any)=>{
      
      // alert('pnr:'+ JSON.stringify(data)),
      
      this.dataList = data;
       
   })
  }
  }

  CreateForm(){
    this.HistoryForm = this.formBuilder.group({
      
      'Email':'',
      'PnrNumber':'',
      
    })
  }

  cancel(PnrNumber:string) : void{
    confirm("are you sure to Cancel "+ PnrNumber);
    this._flightservices.CancelTicket(PnrNumber)
    .subscribe((data:HttpStatusCode)=>{
      
    alert(data.toString())

    

  });


  
  this._flightservices.historybyPnr(PnrNumber)
    .subscribe((data: any)=>{
      
      // alert('pnr:'+ JSON.stringify(data)),
      
      this.dataList = data;
    });
}

public openPDF(): void {
  let DATA: any = document.getElementById('htmlData');
  html2canvas(DATA).then((canvas) => {
    let fileWidth = 208;
    let fileHeight = (canvas.height * fileWidth) / canvas.width;
    const FILEURI = canvas.toDataURL('C:/Users/cogdotnet903/Downloads/airline-ticket/jpg');
    let PDF = new jsPDF('p', 'mm', 'a4');
    let position = 0;
    PDF.addImage(FILEURI, 'jpg', 0, position, fileWidth, fileHeight);
    PDF.save('Tiket.pdf');
  });
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

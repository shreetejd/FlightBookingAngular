import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { BookTicketComponent } from '../book-ticket/book-ticket.component';
import { FlightRegisterServicesService } from '../flight-register-services.service';
import { LoginServicesService } from '../login-services.service';

@Component({
  selector: 'app-get-search-flight',
  templateUrl: './get-search-flight.component.html',
  styleUrls: ['./get-search-flight.component.css']
})
export class GetSearchFlightComponent implements OnInit {
  modalRef: MdbModalRef<BookTicketComponent> | null = null;
dataList : any;
isAdmin:boolean;

  constructor(private _flightRegisterService : FlightRegisterServicesService, private router:Router,private modalService: MdbModalService,loginservice:LoginServicesService) { 
    this.isAdmin=loginservice.UserRole;
this.dataList = _flightRegisterService._datalist;
  }

  openModal(FlightNumber:any,Cost:any) {
    console.log(FlightNumber);
    // this.addView.LoadEditData(FlightNumber);
    this._flightRegisterService._FlightBookId=FlightNumber;
    this._flightRegisterService._FlightCost = Cost;
    this.modalRef = this.modalService.open(BookTicketComponent, {
      data:{ title:FlightNumber },
      modalClass : 'modal-dialog-scrollable'
    })
    this.modalRef.onClose.subscribe((message: any) => {
      console.log(message);
    })
  
  };
  onLogout():void{
    localStorage.clear();
  }

  ngOnInit(): void {
    if(localStorage.getItem('email')==null){
      this.router.navigate([''])
    }
  }

}

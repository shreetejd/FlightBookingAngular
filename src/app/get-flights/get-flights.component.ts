import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FlightRegisterServicesService } from '../flight-register-services.service';
import { FlightDetails } from '../FlightDetails';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { RegisterFlightComponent } from '../register-flight/register-flight.component';
import { EditFLightComponent } from '../edit-flight/edit-flight.component';
import { HttpStatusCode } from '@angular/common/http';
import { flatten } from '@angular/compiler';
import { LoginServicesService } from '../login-services.service';

@Component({
  selector: 'app-get-flights',
  templateUrl: './get-flights.component.html',
  styleUrls: ['./get-flights.component.css']
})
export class GetFlightsComponent implements OnInit {
  
  modalRef: MdbModalRef<EditFLightComponent> | null = null;
  isAdmin:boolean;
   dataList:any;
  constructor(private _flightRegisterService : FlightRegisterServicesService, private router:Router,private modalService: MdbModalService,loginservice:LoginServicesService) { 
    this.isAdmin=loginservice.UserRole;
  }

  @ViewChild(EditFLightComponent) addView !:EditFLightComponent 

  ngOnInit(): void {
    if(localStorage.getItem('email')==null){
      this.router.navigate([''])
    }
    this._flightRegisterService.getFlight()
    .subscribe((data:any)=>{
      
    this.dataList=data})
  }
  

  openModal(FlightNumber:any) {
    console.log(FlightNumber);
    // this.addView.LoadEditData(FlightNumber);
    this._flightRegisterService._FlightNum=FlightNumber;
    this.modalRef = this.modalService.open(EditFLightComponent, {
      data:{ title:FlightNumber },
      modalClass : 'modal-dialog-scrollable'
    })
    this.modalRef.onClose.subscribe((message: any) => {
      console.log(message);
    })
  
  };

  Delete(Flight:number) : void{
    confirm("are you sure to remove");
    this._flightRegisterService.DeleteFlight(Flight)
    .subscribe((data:HttpStatusCode)=>{
      
    alert(data.toString())
    this.ngOnInit();
  })
    
    
}
onLogout():void{
  localStorage.clear();
}
}

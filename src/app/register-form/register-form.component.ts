import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../UserAdmin';
import { UserAdminServiceService } from '../user-admin-service.service';
import { HttpStatusCode } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
  providers: [UserAdminServiceService]
})
export class RegisterFormComponent implements OnInit {

  userForm : any;
  user: User ;
  constructor(private formBuilder : FormBuilder, private _userAdminServices : UserAdminServiceService, private router:Router) { 
    this.CreateForm();
    this.user = {
      FirstName : '',
      LastName : '',
      Email:'',
      Password:'',
      IsAdmin:false,
      Gender:'',
      PhoneNumber:0
    };
  }
  CreateForm(){
    this.userForm = this.formBuilder.group({
      'FirstName':['',Validators.required],
      'LastName':['',Validators.required],
      'Email':['',Validators.required],
      'Password':['',Validators.required],
      'IsAdmin':[false,Validators.required],
      'Gender':['',Validators.required],
      'PhoneNumber': [0,Validators.required]
    })
  }
  
  onSubmit() : void {
   
    if(this.userForm.dirty && this.userForm.valid)
    {
      this.user = {
        FirstName : this.userForm.value.FirstName,
        LastName: this.userForm.value.LastName,
        Email:this.userForm.value.Email,
        Password:this.userForm.value.Password,
        IsAdmin:this.userForm.value.IsAdmin,
        Gender:this.userForm.value.Gender,
        PhoneNumber:this.userForm.value.PhoneNumber
      }
    }
    this._userAdminServices.InsertUser(this.user)
    .subscribe((data:HttpStatusCode)=>
    alert(data.toString()))
    
    this.router.navigate(['/','Login'])
    // console.log(data)    
   
  }

  ngOnInit(): void {
  }

}

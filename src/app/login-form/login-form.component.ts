import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServicesService } from '../login-services.service';
import { LoginUsers } from '../LoginUsers';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm : any;
  loginUser:LoginUsers;
  constructor(private formBuilder : FormBuilder, private _loginServices : LoginServicesService,private router:Router) { 
    this.CreateForm();
    this.loginUser={
      Email:'',
      Password:''
    }
    };
  
  CreateForm(){
    this.loginForm = this.formBuilder.group({
     
      'Email':['',Validators.required],
      'Password':['',Validators.required]
      
    })
  }
  
  onSubmitClick() : void {
   
    if(this.loginForm.dirty && this.loginForm.valid)
    {
      this.loginUser = {
        
        Email:this.loginForm.value.Email,
        Password:this.loginForm.value.Password
       
      }
    }
    this._loginServices.ValidateUser(this.loginUser)
    .subscribe((data:any)=>{
      if(!data.toString().includes('invalid')){

        let dataVal = JSON.parse(data);
        
        localStorage.setItem('token',dataVal['tokenVal']),
        localStorage.setItem('isAdmin',dataVal.user['isAdmin']),
        localStorage.setItem('email',dataVal.user['email'])

        this._loginServices._userRole = dataVal.user['isAdmin'];
        this._loginServices._email = dataVal.user['email'];
        // alert('isAdmin:'+localStorage.getItem('isAdmin'))
        // alert('email:'+localStorage.getItem('email'))
        // alert(localStorage.getItem('token'))
        if(this._loginServices._userRole == true){

          this.router.navigate(['/','AddFlight'])
        }
        else{
  this.router.navigate(['/','searchFlight'])
}
      }
      else{
        alert(data);
      }
     } )
  }
   ngOnInit(): void {

  }

}

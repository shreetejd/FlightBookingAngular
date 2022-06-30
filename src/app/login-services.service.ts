import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUsers } from './LoginUsers';

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {
  baseUrl : string;
  url : string ='';
  public UserRole: any;
  public Email:any;

  get _userRole():boolean{
    return this.UserRole;
  }
  set _userRole(value:boolean){
    this.UserRole=value;
  }

  get _email():string{
    return this.Email;
  }
  set _email(value:string){
    this.Email=value;
  }

  constructor(private _http: HttpClient) {
    this.baseUrl='http://localhost:4000/Api/Auth/';
   }

  ValidateUser(model: LoginUsers): Observable<any> {  
    this.url = this.baseUrl+ 'login?Email=' + model.Email+ '&Password='+model.Password;
       
    let headers = new Headers();   
    return this._http.post(this.url,{Headers:headers},{responseType:'text'} )  ;
        

} 
}

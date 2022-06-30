import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './UserAdmin';


@Injectable({
  providedIn: 'root'
})
export class UserAdminServiceService {
  baseUrl : string;
  url : string ='';
  constructor(private _http: HttpClient) {
    this.baseUrl='http://localhost:4000/Api/Auth/';
   }

  InsertUser(model: User): Observable<any> {  
    this.url = this.baseUrl+ 'register?firstName=' + model.FirstName+ '&LastName='+model.LastName+'&Email='+model.Email+'&Password='+model.Password+'&IsAdmin='+model.IsAdmin+'&Gender='+model.Gender+'&PhoneNumber='+model.PhoneNumber;
       
    let headers = new Headers();   
    return this._http.post(this.url,{Headers:headers},{responseType:'text'} )  ;
        

} 

}

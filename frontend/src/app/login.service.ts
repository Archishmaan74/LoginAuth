import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpclient: HttpClient) {

   }

   signIn(data: any){
    return this.httpclient.post("http://localhost:3000/signup",data);
   }
}

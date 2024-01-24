import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data: any={}
  constructor(private loginService: LoginService){

  }

  logIn(data: any){
    this.loginService.logIn(data).subscribe(data);
  }
}

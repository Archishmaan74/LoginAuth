import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  data: any={}
  constructor(private loginService: LoginService){

  }

  signIn(data: any){
    this.loginService.signIn(data).subscribe(data);
    alert("Signed up successfully!")
  }
}

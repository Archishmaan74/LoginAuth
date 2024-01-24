import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  data: any={};
  constructor( private loginService: LoginService){
    this.loginService.display().subscribe((data)=>{
      this.data = data
    },(err)=>{
      console.log("Cannot fetch from service...");
      
    })
  }
}

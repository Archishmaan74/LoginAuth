import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [
  {
    path: "", component: LoginComponent
  },
  {
    path: "signup", component: SignupComponent
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "display", component: DisplayComponent
  },
  {
    path: "**", component: ErrorpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

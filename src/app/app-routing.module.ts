import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadlineComponent } from './topheadline/topheadline.component';
import { TechComponent } from './tech/tech.component';
import { BussinessComponent } from './bussiness/bussiness.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',redirectTo:"login",pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'topheadline',component:TopheadlineComponent},
  {path:'tech',component:TechComponent},
  {path:'bussiness',component:BussinessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

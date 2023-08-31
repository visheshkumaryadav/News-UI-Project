import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { NgForm } from '@angular/forms';
import { LoginsignupService } from '../service/loginsignup.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  implements OnInit{
  user=new User()
  msg='';
   constructor( private service:LoginsignupService, private router : Router){}
   ngOnInit(): void { 
   }
   signup(){
   this.service.signupuserformremote(this.user).subscribe(
     data=>{
       console.log("Response recived"), 
       this.router.navigate(["/login"])
     },
       error=>{
         console.log("Exception accoures")
         this.msg=error.error;
       })
   }
 
 }
 
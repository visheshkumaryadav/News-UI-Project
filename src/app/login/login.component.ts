import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { User } from '../user';
import { Router } from '@angular/router';
import { LoginsignupService } from '../service/loginsignup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
 user=new User()
 msg='';
  constructor( private service:LoginsignupService, private router : Router){}
  ngOnInit(): void {
    
  }
  login(){
  this.service.loginuserformremote(this.user).subscribe(
    data=>{
      console.log("Response recived"),  
      this.router.navigate(["/topheadline"])
    },
      error=>{
        console.log("Exception accoures")
        this.msg="Bad credential,please enter valid emailid and password";
      })
  }

}

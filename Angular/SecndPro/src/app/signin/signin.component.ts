import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  private login:string;
  private password:string;

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit() {
    if(sessionStorage.getItem("user"))
    {
      this.router.navigate(['']);
      alert("You are already Logged in")
    }
  }
 public dologin():void{
  //  alert("username: " +this.login+"Password: "+this.password)
   let res=this.loginService.authenticate(this.login,this.password);
   if(res==true)
    {
     this.router.navigate(['']);
     sessionStorage.setItem("user",this.login);
    }
     else
     alert("Invalid Username and password!")
   }
 }


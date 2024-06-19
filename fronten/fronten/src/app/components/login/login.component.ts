import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { LoginUserService } from '../services/login-user.service';
import { Router } from '@angular/router';
import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  token:any;
  message='';
  constructor(private userService:UserService,
    private loginUserService:LoginUserService,
    private router:Router) { }
  credentials={
    username:'',
    password:''
  }
  ngOnInit(): void {
  }
  r:any
  error=false
 
  doLogin() :void
  {

    this.userService.getlogin(this.credentials.username).subscribe((result) => {
      console.warn(result)
      this.r = result
      console.log(this.r)
      if(this.r.email=='ADMIN'){
        localStorage.setItem("LogginUser", "ADMIN")
      }
      if (result == null) {

        this.error = true
      }
      else {
       
        if (this.r.password == this.credentials.password) {
          localStorage.setItem("token", "true")
          this.router.navigate(['']);

        }
        else {
          this.error = true
        }
      }



    })



  }



}

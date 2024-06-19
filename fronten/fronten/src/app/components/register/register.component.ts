import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  message='';
  alert:any;
  constructor(private userService:UserService) { }
  public user={
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    confirmPassword:''

  }
  ngOnInit(): void {
  }

  formSubmit(){
  if (!this.user.firstname || !this.user.lastname || !this.user.email || !this.user.password || !this.user.confirmPassword) {
    this.message = 'Please fill in all the required fields.';
    return; // Stop the form submission
  }
  this.message = '';

  {
    if(this.user.password!=this.user.confirmPassword){
      alert("Password does not match");
    }
    else{

    this.userService.addUser(this.user)

    .subscribe((response)=>
    {
      console.log(response);
      this.alert=true;
      this.message='User Registered...'
      window.location.reload();

    },
    error=>
    {
      this.message="User Already exists";

    });
  }
}
}
}
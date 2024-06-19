import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from './components/services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public userService: UserService) { }

admin:any;
noOfUser:any;
noOfReviews:any;
noOfProducts:any;
  logout()
  {
    return this.userService.logout();
  }
  ngOnInit(): void {
    this.userService.getUserCount()
    .subscribe(
      data=>
      {
        this.noOfUser=data;
         console.log(data);
      },
      error=>
      {
        console.log(error);
      }
    )
    this.userService.getProductCount()
    .subscribe(
      data=>
      {
        this.noOfProducts=data;
        console.log(data);
      },
      error=>
      {
        console.log(error);
      }
    )
    this.userService.getCountReviews()
    .subscribe(
      data=>
      {
        this.noOfReviews=data;
        console.log(data);
      },
      error=>
      {
        console.log(error);
      }
    )
  }
  title = 'frontend';
}

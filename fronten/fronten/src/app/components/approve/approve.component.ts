import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {

  constructor(private userService:UserService) { }
  collection:any;
  
  ngOnInit(): void {
    this.userService.allReview().subscribe((result:any) => {
  
      this.collection = result;
      console.log(this.collection);
     
    }, err => { console.log(err) })
  }
  
  public approve(id: any) {
    this.userService.approveReview(id, "Approved").subscribe(
      res=>
      {

        console.log(res);
      },error=>
      {
        console.log(error);
      }
    )
   this.ngOnInit()
  }
  public disApprove(id: any) {
    this.userService.approveReview(id, "Disapproved").subscribe()

  }

}

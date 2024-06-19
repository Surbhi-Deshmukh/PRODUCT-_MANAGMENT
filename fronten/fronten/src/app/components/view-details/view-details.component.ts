import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'view-products',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  constructor(private userService : UserService) { }
  collection:any;
  ngOnInit(): void {
    this.userService.allProducts().subscribe((result) => {
      // console.warn(result);
      console.log(result)
      this.collection = result;
    },err=>{console.log(err)})
  }
}

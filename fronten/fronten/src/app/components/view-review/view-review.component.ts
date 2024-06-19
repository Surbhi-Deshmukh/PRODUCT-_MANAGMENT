import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'view-review',
  templateUrl: './view-review.component.html',
  styleUrls: ['./view-review.component.css']
})
export class ViewReviewComponent implements OnInit {
  id:any
  constructor(private userService:UserService,
    private router:ActivatedRoute) { }
    list:any;
    Avg:any;

  ngOnInit(): void {
    this.Avg=0
    this.id = this.router.snapshot.params['productId']
    this.userService.getProductById(this.id).subscribe(data=>{
      console.log(this.id)
     console.log(data)
      this.list=data;
      console.log(this.list.review.length);
      for(var i=0 ;i<this.list.review.length; i++){
      console.log(this.list.review.length);
      this.Avg=this.Avg + parseInt(this.list.review[i].review);
      }
      this.Avg=this.Avg/this.list.review.length;
      this.Avg=parseInt(this.Avg)
      console.log (this.Avg)

  })

}
}
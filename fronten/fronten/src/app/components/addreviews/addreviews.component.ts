import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'addreviews',
  templateUrl: './addreviews.component.html',
  styleUrls: ['./addreviews.component.css']
})
export class AddreviewsComponent implements OnInit {
  review = new FormGroup({
    review: new FormControl(''),
    rating: new FormControl(''),
     })

  constructor(private userService:UserService,private route:Router,private router:ActivatedRoute) { }
  public user={
    
    review:'',
    rating:'',
    state:"Disapproved",
  }
  ngOnInit(): void {
  }
  addReview()
  {
    this.user.review=this.review.value.rating;
    this.user.rating=this.review.value.review;
    this.user.state="Disapproved";

    console.log(this.user);
    this.userService.addReview(this.router.snapshot.params['productId'],this.user)
    .subscribe(
      data=>
      {  
        console.log(this.review.value);
      },error=>
      {
        console.log(error);
      }
    )

  }

}

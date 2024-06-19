import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  constructor(private userService: UserService) { }
  products:any

  ngOnInit(): void {
  }
  public product={
    productName:'',
    brandName:'',
    code:'',
    
  }
  searchByproductName()
  {
    products:[]
    this.userService.getproductByProductCode(this.product.code)
    .subscribe(
      res=>
      {
        this.products=res;
        if(this.products.length==0)
        {
         
        }
        else
        {
          alert("Product Already Exist")
        }
      },
      error=>
      {
        console.log(error);
      }
    )
  }
  addproduct()
  {
    this.searchByproductName()
    if(this.products.length==0){
    this.userService.addProducts(this.product).subscribe
    (
      data=>

      {
        console.log(data);
        alert("SuccessFully Added")
        this.reloadPage();

      },error=>
      {
        console.log(error);
      })

  }
}
  reloadPage(): void {
    window.location.reload();
  }



}

import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
const baseUrl="http://localhost:9001";
 
@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:any;
  constructor(private http:HttpClient) { }
  Url = "http://localhost:9001"
  a=1;
  public getCurrentUser()
  {
    return this.http.get(`${baseUrl}/currentuser`)
  }
  //add user
  addUser(user:any)
  {
    return this.http.post(this.Url+"/users",user);
  }
  //generate tokem

  public generateToken(userdata:any)
  {
    console.log(userdata)
    return this.http.post(`${baseUrl}/generate-token`,userdata);
  }

  //login user: set Token in LocalStorage

  loginUser(token:any)
  {
    localStorage.setItem("token",token)
    return true;
  }
  getlogin(email: any)
  {
    return this.http.get(this.Url+"/users/"+email);

  }

  //User if Loggedin or not

  isLoggedIn()
  {
    let token=  localStorage.getItem('token');
    // console.log("in tokrn",token);
    if(token==undefined || token==null || token =="")
    {
      return false;
    }
    else{
      return true;
    }
  }
  // logout: remove TOken from LocalStroage

  logout()
  {
    sessionStorage.removeItem("token");
    localStorage.removeItem('token');
    localStorage.removeItem('LogginUser');
    return true;
  }
  //get Token
  public getToken()
  {
   
    return localStorage.getItem('token');
  }
//All product
  public allProducts() {
    return this.http.get(this.Url+"/products");

  }
  // Add product
  public addProducts(product:any) {
    console.log(product)
    return this.http.post(this.Url+"/products",product);
  }

  public getproductByProductName(productName:any)
  {
    
    return this.http.get(this.Url+"/products/name/"+productName);

  }
  public getproductByProductBrand(productName:any)
  {
    
    return this.http.get(this.Url+"/products/brand/"+productName);

  }
  public getproductByProductCode(codeName:any)
  {
    
    return this.http.get(this.Url+"/products/code/"+codeName);

  }
  // add reviews

  public addReview(id:any,data: any) {
    return this.http.post(this.Url+"/productReview/"+id,data);
  }
  public getproductByProductId(productId:any)
  {
    let myToken= `Bearer ${sessionStorage.getItem("token")}`
    // console.log("MyToken",myToken,productName)
   
    return this.http.get(`${baseUrl}/product/${productId}`);

  }
  // return Loggin User 
  public isAdmin()
  {
    const u= localStorage.getItem('LogginUser');
    if(u=='ADMIN')
    {
      return true;
    }
    else{
      return false;
    }

  }

  public getProductById(id:any)
  {

    return this.http.get(this.Url+"/products/id/"+id);

    
  }
  public allReview()
  {
    return this.http.get(this.Url+"/getReviews");
  }
  public approveReview(id:any,data:any)
  {
    return this.http.put(this.Url+"/status/update/"+id+"/"+data,id,data);
  }

  public getUserCount()
  {
    return this.http.get(this.Url+"/count-users");
  }
  public getProductCount()
  {
    return this.http.get(this.Url+"/count-products");
  }
  public getCountReviews()
  {
    return this.http.get(`${baseUrl}/count-reviews`);
  }
}

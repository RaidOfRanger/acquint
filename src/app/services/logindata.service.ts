import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogindataService {

  IsLoggedIn = new BehaviorSubject<boolean>(false)

  url = 'http://localhost:3000/acq/'
  constructor(private http: HttpClient, private router: Router) { }


  OnRefresh() {
    this.router.navigate(['add-product'])
  }

  usersignupsubmit(data: any) {
    console.log(data)
    return this.http.post(this.url+"register", data)
  }

  userlogin(data:any){
    return this.http.post(this.url+"login",data)
  }

  AddProduct(data: any){
    return this.http.post(this.url+"add",data)
  }

  GetAllProduct(){
    return  this.http.get(this.url+"fetchall")
  }

  //image upload
  updateData(data: any){
    
    return this.http.patch(this.url+"update",data,{responseType:'text'})
  }

  deleteProduct(data: any){
    console.log("inside api path", data);
    
    return this.http.delete(this.url+"delete/"+data._id,{responseType:'text'})
  }


}

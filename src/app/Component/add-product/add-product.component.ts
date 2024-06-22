import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogindataService } from '../../services/logindata.service';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  selectedFile: File | null = null;
  user1: any

  AddProductform = new FormGroup({
    Name: new FormControl('',[Validators.required]),
    image: new FormControl('',[Validators.required]),
    product_code: new FormControl('',[Validators.required]),
    price: new FormControl('',[Validators.required]),
    category: new FormControl('',[Validators.required]),
    manufacture_date: new FormControl('',[Validators.required]),
    expiry_date: new FormControl('',[Validators.required]),
    owner: new FormControl('',[Validators.required]),
    status: new FormControl('',[Validators.required]),
  })

  constructor(private logindata: LogindataService, private router: Router,private http: HttpClient) {
  
   }

  ngOnInit(): void {
    

  }

  OnAddProduct(){
    let r = ''
    console.log("check",this.AddProductform);

    var user = localStorage.getItem('user_login_data')
    if(user){
      
      this.user1  = JSON.parse(user)
      console.log(this.user1.email)
      r = this.user1.email
      
     
    }
  this.AddProductform.value.owner = r
    this.logindata.AddProduct(this.AddProductform.value)
    .subscribe(
      (result)=>{
        
        this.logindata.IsLoggedIn.next(true)
       this.router.navigate(['']);
        console.log("data send")
      },
      err=>{
        console.log("data not send",err)
      }
    )
    
  }



}

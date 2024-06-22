import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LogindataService } from '../../services/logindata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {
  
  selected_data: any;
  db1: any

  AddProductform = new FormGroup({
    _id: new FormControl(''),
    Name: new FormControl('',[Validators.required]),
    image: new FormControl('',[Validators.required]),
    product_code: new FormControl('',[Validators.required]),
    price: new FormControl('',[Validators.required]),
    category: new FormControl('',[Validators.required]),
    manufacture_date: new FormControl('',[Validators.required]),
    expiry_date: new FormControl('',[Validators.required]),
    owner: new FormControl('',[Validators.required]),
    status: new FormControl('',[Validators.required]),
    __v: new FormControl(''),
  })
  
  constructor(private update_product : LogindataService,private route: Router){}

  ngOnInit(){
    
    const db = localStorage.getItem('data')
    if(db){
      this.db1 = JSON.parse(db)
      this.AddProductform.setValue(this.db1)
      console.log(this.AddProductform);
    }
    
  }

  OnUpdateProduct(){
    this.update_product.updateData(this.AddProductform.value).subscribe((res)=>{
      console.log("success",res);
      this.route.navigate([''])
      
    },(err)=>{
      console.log("not",err);
      
    })
  }

}

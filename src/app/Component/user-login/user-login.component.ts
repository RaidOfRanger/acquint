import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LogindataService } from '../../services/logindata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {

  regtolog: boolean = false;
  
  loginform = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    password: new FormControl('',[Validators.required])
  })

  loginform1 = new FormGroup({
    email: new FormControl('',[Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    password: new FormControl('',[Validators.required])
  })

  

  constructor(private logindata: LogindataService, private router: Router) { }

  ngOnInit(): void {
    
  }

  OnSubmituserSignup(){
    this.logindata.usersignupsubmit(this.loginform.value)
    .subscribe(
      (result: any)=>{
        localStorage.setItem('user_login_data',JSON.stringify(result))
        this.logindata.IsLoggedIn.next(true)
        //user homepage will go here
        this.router.navigate(['']);
        console.log("data send")
      },
      (err: any)=>{
        console.log("dat not send",err)
      }
    )
    
  }

  switchTouserLogin(){
    this.regtolog =true
    
  }
  switchTouserReg(){
    this.regtolog =false
    
  }

  OnSubmituserLogin(){
    console.log(this.loginform1.value);
    this.logindata.userlogin(this.loginform1.value).subscribe((res:any)=>{
      localStorage.setItem('user_login_data',JSON.stringify(this.loginform1.value))
        this.logindata.IsLoggedIn.next(true)
        //userlogin page enter here
        this.router.navigate(['']);
        console.log("data send")
    },(err:any)=>{
      console.log(err);
      
    })
  }

}

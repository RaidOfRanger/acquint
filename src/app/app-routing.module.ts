import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { UserLoginComponent } from './Component/user-login/user-login.component';
import { AddProductComponent } from './Component/add-product/add-product.component';
import { EditProductComponent } from './Component/edit-product/edit-product.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'user-login',component:UserLoginComponent
  },
  {
    path:'add-product',component:AddProductComponent
  },
  {
    path:'edit-product',component:EditProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

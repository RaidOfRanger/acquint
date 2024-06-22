import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './Component/user-login/user-login.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

import {provideNativeDateAdapter} from '@angular/material/core';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HomeComponent } from './Component/home/home.component';
import { AddProductComponent } from './Component/add-product/add-product.component';
import { HttpClientModule } from '@angular/common/http';
import { EditProductComponent } from './Component/edit-product/edit-product.component';
import { HeaderComponent } from './Component/header/header.component';
import { SearchPipe } from './Pipe/search.pipe';
import { LogoutComponent } from './Component/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    HomeComponent,
    AddProductComponent,
    EditProductComponent,
    HeaderComponent,
    SearchPipe,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    HttpClientModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideNativeDateAdapter()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

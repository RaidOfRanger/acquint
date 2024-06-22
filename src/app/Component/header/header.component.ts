import { Component } from '@angular/core';
import { LogindataService } from '../../services/logindata.service';
import { SearchService } from '../../services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  searchtext :string = ''


  constructor( private loginservice: LogindataService,private searchService: SearchService,private route: Router ) {
  }

  searchtra(){
    this.searchService.setSearchQuery(this.searchtext);
    
  }

  logout(){
    localStorage.removeItem('data')
    localStorage.removeItem('user_login_data')
    this.route.navigate(['user-login'])
  }
}

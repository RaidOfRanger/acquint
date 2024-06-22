import { Component } from '@angular/core';
import { LogindataService } from '../../services/logindata.service';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  productList: undefined | any[]

  searchtext : string= ''

  cart : any = []

   user :any

   current_owner = ''

  button_logic: boolean = false;

  constructor(private product: LogindataService, private route: Router , public searchService: SearchService) { 
    this.searchService.searchQuery$.subscribe(data=>{
      this.searchtext =data
      
    })
  }

  ngOnInit(): void {
    console.log("test");
    
    this.product.GetAllProduct().subscribe((result:any)=>{
      this.productList =  result
      console.log(result);
      
      
    },err=>{
      console.log(err);
      
    })

    this.user = localStorage.getItem('user_login_data')
    if(this.user){
      let owner_data = JSON.parse(this.user)
      console.log(owner_data);
      
      this.current_owner  = owner_data.email
    }

    
  }


  getGridColumns(): number {
    const screenWidth = window.innerWidth;
    const cardWidth = 200; // Width of each card (adjust as needed)
    const minCols = 1; // Minimum number of columns
    return Math.max(Math.floor(screenWidth / cardWidth), minCols);
  }

  deletecard(data:any){
    if(data.owner == this.current_owner){
      this.product.deleteProduct(data).subscribe((result)=>{
        console.log("data deleted",result);
        this.ngOnInit()
        
      },err=>{
        console.log(err);
        
      })
    }else{
      alert('you are not a owner')
    }
  }
  editcard(data: any){
    localStorage.setItem("data",JSON.stringify(data))
    if(data.owner == this.current_owner){
      this.route.navigate(['edit-product'])
    }else{
      alert('you are not a owner')
    }
    
  }
}

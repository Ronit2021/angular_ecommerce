import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default';
  SellerName:string = '';
  constructor(private route: Router){}
    ngOnInit(): void {
    //throw new Error('Method not implemented.');
      this.route.events.subscribe((val: any) =>{
        if(val.url){
          if(localStorage.getItem('seller') && val.url.includes('seller')){
            this.menuType = 'seller';
            if(localStorage.getItem('seller')){
              let sellerStore = localStorage.getItem('seller');
              let sellerData = sellerStore && JSON.parse(sellerStore)[0];
              this.SellerName = sellerData.name;
            }
          } else {
            this.menuType = 'default';
          }
        }    
      })
        
    }

    logout(){
      localStorage.removeItem('seller');
      this.route.navigate(['/']);
    }
  }



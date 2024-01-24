import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrl: './seller-home.component.css'
})
export class SellerHomeComponent implements OnInit {

  productList:undefined| product[]
  productMessage: undefined | string;
  constructor(private product:ProductService){}
  
  ngOnInit(): void {
    this.product.productList().subscribe((result)=>{
      this.productList = result;
    })
    //throw new Error('Method not implemented.');
  }
  deleteProduct(id:number){
    this.product.deleteproduct(id).subscribe((result)=>{
      console.warn(result);
      if(result){
        this.productMessage = "Product Deleted";
      }
      setTimeout(()=>this.productMessage = undefined,3000)
    })
  }

}

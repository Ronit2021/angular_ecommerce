import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { rmSync } from 'fs';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrl: './seller-add-product.component.css'
})
export class SellerAddProductComponent implements OnInit {
  addProductMessage: string | undefined;
  constructor(private product:ProductService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  submit(data: product){
    console.warn(data);
    this.product.addProduct(data).subscribe((result)=>{
      console.warn(result);
      if(result){
        this.addProductMessage = "Product Add Successfully";
      }
      setTimeout(()=>this.addProductMessage = undefined,3000)
    });
  }

}

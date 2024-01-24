import { Component,OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';
import { Login } from '../data-type';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent {

  constructor(public seller: SellerService,public router:Router){}
  showLogin = false
  authError:string  = '';
  ngOnInit(): void{
    this.seller.reloadSeller()
  }
  signUp(data:SignUp):void{
    this.seller.userSignup(data)
   /*this.seller.userSignup(data).subscribe((result)=>{
    if(result){
      this.router.navigate(['seller-home'])
    }
  }
  );*/
}
login(data:Login): void{
  this.authError = '';
  this.seller.userLogin(data)
  
  if(this.seller.isLoginError){
    this.authError = "Email or password is not correct";
  }
}

  openLogin(){
    this.showLogin = true;
  }
  openSignup(){
    this.showLogin = false;
  }
}


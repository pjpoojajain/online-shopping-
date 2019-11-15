import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

  
  constructor() { }
  cartarr=[];
  cartobj:any;

  public addCart(obj)
  {
    this.cartarr.push(obj);
  }

  
    
  public readCart()
  {
    return this.cartarr;
  }


}

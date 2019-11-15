import { Component, OnInit ,Input} from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  name:string;
  image:string;
  price:number;
  description:string
  r:any;
  
  cartarr1=[];



    constructor(private cartserv:CartService) {
      
      

     }

     remove(ref)
     {
       this.cartarr1.splice(ref,1);
     }
     
    ngOnInit() {
    this.cartarr1=this.cartserv.readCart();
    }

}

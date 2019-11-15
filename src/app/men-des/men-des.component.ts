import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-men-des',
  templateUrl: './men-des.component.html',
  styleUrls: ['./men-des.component.css']
})
export class MenDesComponent implements OnInit {

  // name:string;
  // image:string;
  // price:number;
  // Des:string;
  //   constructor(private router:Router)
  //   {}
  // addtocart(d)
  // {
  // this.router.navigate(['/cart']);
  // }
  // @Input() d:Object;
  //   ngOnInit() {
  //   }
  name:string;
  image:string;
  price:number;
y:any;
@Input()  b:Object;

  constructor( private router:Router,private cartserv:CartService) { }

  addToCart(ref)
 {
this.y=ref;
this.cartserv.addCart(this.y);

this.router.navigate(['/cart']);
alert("successfully added")
  }
  callToRouter()
  {
    this.router.navigate(['/address']);
  }

  ngOnInit() {}

}

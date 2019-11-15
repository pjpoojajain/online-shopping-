import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service'
@Component({
  selector: 'app-kids-des',
  templateUrl: './kids-des.component.html',
  styleUrls: ['./kids-des.component.css']
})
export class KidsDesComponent implements OnInit {
  name:string;
  image:string;
  price:number;
  Des:string;
y:any;
  @Input() d:Object;

    constructor(private router:Router,private cartserv:CartService)
    {}
  addtocart(d)
  {
    this.y=d;
this.cartserv.addCart(this.y);
  this.router.navigate(['/cart']);
  alert("successfully added")
  }
 
    ngOnInit() {
    }
}

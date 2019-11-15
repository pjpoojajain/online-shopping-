import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';
import { CartService } from '../cart.service'
@Component({
  selector: 'app-woman-des',
  templateUrl: './woman-des.component.html',
  styleUrls: ['./woman-des.component.css']
})
export class WomanDesComponent implements OnInit {

  name:string;
  image:string;
  price:number;
  Des:string;
  y:any;
    constructor(private router:Router,private cartserv:CartService)
    {}
  addtocart(d)
  {
    this.y=d;
    this.cartserv.addCart(this.y);
  this.router.navigate(['/cart']);
  alert("successfully added")
  }
  @Input() d:Object;
    ngOnInit() {
    }
}

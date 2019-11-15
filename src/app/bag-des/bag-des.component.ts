import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bag-des',
  templateUrl: './bag-des.component.html',
  styleUrls: ['./bag-des.component.css']
})
export class BagDesComponent implements OnInit {

  name:string;
  image:string;
  price:number;
  Des:string;
    constructor(private router:Router)
    {}
  addtocart(c)
  {
  this.router.navigate(['/login']);
  }
  @Input() c:Object;
    ngOnInit() {
    }
  
}

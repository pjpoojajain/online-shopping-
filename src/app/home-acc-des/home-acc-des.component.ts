import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-acc-des',
  templateUrl: './home-acc-des.component.html',
  styleUrls: ['./home-acc-des.component.css']
})
export class HomeAccDesComponent implements OnInit {

  name:string;
  image:string;
  price:number;
  Des:string;
    constructor(private router:Router)
    {}
  addtocart(d)
  {
  this.router.navigate(['/login']);
  }
  @Input() d:Object;
    ngOnInit() {
    }

}

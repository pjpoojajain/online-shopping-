import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-watches-des',
  templateUrl: './watches-des.component.html',
  styleUrls: ['./watches-des.component.css']
})
export class WatchesDesComponent implements OnInit {

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

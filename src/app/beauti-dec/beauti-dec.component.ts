import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beauti-dec',
  templateUrl: './beauti-dec.component.html',
  styleUrls: ['./beauti-dec.component.css']
})
export class BeautiDecComponent implements OnInit {

  name:string;
  image:string;
  price:number;
  Des:string;
    constructor(private router:Router)
    {}
  addtocart(c)
  {
 // this.router.navigate(['/cart']);
  this.router.navigate(['/login'])
  }
  @Input() c:Object;
    ngOnInit() {
    }
}

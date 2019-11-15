import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mobile-description',
  templateUrl: './mobile-description.component.html',
  styleUrls: ['./mobile-description.component.css']
})
export class MobileDescriptionComponent implements OnInit {
name:string;
image:string;
price:number;
Des:string;
  constructor(private router:Router)
  {}
addtocart(b)
{
this.router.navigate(['/login']);
}
@Input() b:Object;
  ngOnInit() {
  }

}

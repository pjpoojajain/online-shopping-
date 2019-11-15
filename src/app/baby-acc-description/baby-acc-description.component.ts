import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-baby-acc-description',
  templateUrl: './baby-acc-description.component.html',
  styleUrls: ['./baby-acc-description.component.css']
})
export class BabyAccDescriptionComponent implements OnInit {

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

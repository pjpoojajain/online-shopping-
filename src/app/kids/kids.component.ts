import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KidsService } from '../kids.service';
@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css'],
  providers:[KidsService]
})
export class KidsComponent implements OnInit {
  kid=[];
  constructor(private kids:Router,private kid1:KidsService)
  {}
  ngOnInit()
  {
    this.kid1.read().subscribe((receiveData)=>{this.kid=receiveData;});
  }
  a:object;
   x: boolean=false;
   do1(d:any)
   {
     this.a=d;
     this. x=true;
   }
}

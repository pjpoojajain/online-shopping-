import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeAccService } from '../home-acc.service'
@Component({
  selector: 'app-home-accessories',
  templateUrl: './home-accessories.component.html',
  styleUrls: ['./home-accessories.component.css'],
  providers: [ HomeAccService ]
})
export class HomeAccessoriesComponent implements OnInit {

  homeacc=[];
  constructor(private hacc:Router,private hacc1:HomeAccService)
  {}
  ngOnInit()
  {
    this.hacc1.read().subscribe((receiveData)=>{this.homeacc=receiveData;});
  }
  a:object;
   x: boolean=false;
   do1(d:any)
   {
     this.a=d;
     this. x=true;
   }

}

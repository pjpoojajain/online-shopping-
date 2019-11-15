import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobileService } from '../Mobile.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css'],
  providers:[MobileService]
})
export class MobileComponent implements OnInit {
  data=[];
  constructor(private mobile:Router,private mobile1:MobileService)
  {}
  ngOnInit()
  {
    this.mobile1.read().subscribe((receiveData)=>{this.data=receiveData;});
  }
  a:object;
   x: boolean=false;
   do1(b:any)
   {
     this.a=b;
     this. x=true;
   }

  // Mobile:object[];
  // constructor(private mobile:Router,private mobile1:MobileService) {}

  // a:object;
  // x: boolean=false;
  // do1(b:any)
  // {
  //   this.a=b;
  //   this. x=true;
  // }
  // ngOnInit() {
  //   this.Mobile=this.mobile1.read()
  //   console.log()
  // }

  // login()
  // {
  //   this.mobile.navigate(['/login'])
  // }
  // // do1()
  // // {
  // //   this.mobile.navigate([''])
  // // }

}


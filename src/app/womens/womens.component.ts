import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WomanService } from '../woman.service';
@Component({
  selector: 'app-womens',
  templateUrl: './womens.component.html',
  styleUrls: ['./womens.component.css'],
  providers:[ WomanService ]
})
export class WomensComponent implements OnInit {

  women=[];
  constructor(private womens:Router,private women1:WomanService)
  {}
  ngOnInit()
  {
    this.women1.read().subscribe((receiveData)=>{this.women=receiveData;});
  }
  a:object;
   x: boolean=false;
   do1(d:any)
   {
     this.a=d;
     this. x=true;
   }

}

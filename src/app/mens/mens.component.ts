import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MensService } from '../mens.service';
@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.css'],
  providers:[MensService]
})
export class MensComponent implements OnInit {

  men=[];
  constructor(private mens:Router,private men1:MensService)
  {}
  ngOnInit()
  {
    this.men1.read().subscribe((receiveData)=>{this.men=receiveData;});
  }
  a:object;
   x: boolean=false;
   do1(d:any)
   {
   
     this.a=d;
     this.x=true;
    
   }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WatchesService } from '../watches.service';
@Component({
  selector: 'app-wathes',
  templateUrl: './wathes.component.html',
  styleUrls: ['./wathes.component.css'],
  providers: [WatchesService]
})
export class WathesComponent implements OnInit {
  watch=[];
  constructor(private watchs:Router,private watch1:WatchesService)
  {}
  ngOnInit()
  {
    this.watch1.read().subscribe((receiveData)=>{this.watch=receiveData;});
  }
  a:object;
   x: boolean=false;
   do1(d:any)
   {
     this.a=d;
     this. x=true;
   }
   isDesc:boolean;
   column:string;
  //  name:string;
  //  price:number;
   direction:number;
   
   sort(property){
   this.isDesc = !this.isDesc;
   this.column= property;
   
   this.direction = this.isDesc ? 1 : -1;
      };
}

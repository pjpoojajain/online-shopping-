import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BagService } from '../bag.service';
@Component({
  selector: 'app-bags',
  templateUrl: './bags.component.html',
  styleUrls: ['./bags.component.css'],
  providers:[BagService]
})
export class BagsComponent implements OnInit {

  bag=[];
  constructor(private bag1:Router,private bag2:BagService) { }

   ngOnInit() {

    this.bag2.read().subscribe((receiveData)=>{this.bag=receiveData;});
  }
  a:Object;
  x:boolean=false;
  baby1(c:any)
  {
        this.a=c;
        this.x=true;
  }

}

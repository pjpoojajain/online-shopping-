import { Component, OnInit } from '@angular/core';
import { BabyAccessService } from '../baby-access.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-baby-accessries',
  templateUrl: './baby-accessries.component.html',
  styleUrls: ['./baby-accessries.component.css'],
  providers: [BabyAccessService]
})
export class BabyAccessriesComponent implements OnInit {

  baby=[];
  constructor(private b1:Router,private b2:BabyAccessService) { }

   ngOnInit() {

    this.b2.readData().subscribe((receiveData)=>{this.baby=receiveData;});
  }
  a:Object;
  x:boolean=false;
  baby1(c:any)
  {
        this.a=c;
        this.x=true;
  }


}

import { Component, OnInit } from '@angular/core';
import { BeautiService } from '../beauti.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-beauti',
  templateUrl: './beauti.component.html',
  styleUrls: ['./beauti.component.css'],
  providers:[BeautiService]
})
export class BeautiComponent implements OnInit {

  beauti=[];
  constructor(private beauti1:Router,private beauti2:BeautiService) { }

   ngOnInit() {

    this.beauti2.readData().subscribe((receiveData)=>{this.beauti=receiveData;});
  }
  a:Object;
  x:boolean=false;
  baby1(c:any)
  {
        this.a=c;
        this.x=true;
  }


}

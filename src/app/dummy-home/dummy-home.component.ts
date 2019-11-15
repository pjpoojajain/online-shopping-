import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy-home',
  templateUrl: './dummy-home.component.html',
  styleUrls: ['./dummy-home.component.css']
})
export class DummyHomeComponent implements OnInit {

  p:boolean=true;

  constructor() {}
  ngOnInit() {
  }

}

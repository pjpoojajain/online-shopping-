import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
  }
  
  readData(a)
  {
    


    this.http.post('/api/familyinfo',a.value,{responseType:'text'})
                    .subscribe(data=> {
                      alert(data);
                      console.log(a.value);
                    },error=>{
                      console.log(JSON.stringify(error.json()));
                    })
  }

}

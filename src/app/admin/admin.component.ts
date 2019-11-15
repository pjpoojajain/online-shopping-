import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  ngOnInit() {
  }
  x:boolean=false;
  email:number;
  password:string;
  y:string;
  constructor(private router:Router,private http:HttpClient) 
  { }
  readData(a)
  {
    console.log(a.value);
    this.http.post('/api/admin',a.value,{responseType:'text'})
                    .subscribe(data=> {
                      console.log(data)
                      if(data==="user undefined")
                      {
                          this.x=true;
                          this.y="wrong credential";
                          this.email=null;
                          this.password=null;
                      }
                      if(data==="successfully login"){
                        this.x=false;
                      alert("successfully login");
                     this.router.navigate(['admindata'])
                      }
                     error=>{
                      console.log(JSON.stringify(error.json()));}
                    })
  }
}

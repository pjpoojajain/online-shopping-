import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
   x:boolean=false;
  email:number;
  password:string;
  y:string;
  constructor(private router:Router,private http:HttpClient) 
  { }
  readData(a)
  {
    console.log(a.value);
    this.http.post('/api/login',a.value,{responseType:'text'})
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
                      this.router.navigate(['cart'])
                      }
                     error=>{
                      console.log(JSON.stringify(error.json()));}
                    })
  }
  callToRouter()
  {
    this.router.navigate(['/register']);
  }

}

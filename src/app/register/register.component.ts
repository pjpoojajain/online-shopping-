import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
  }
  
  readData(a)
  {
    


    this.http.post('/api/register',a.value,{responseType:'text'})
                    .subscribe(data=> {
                      alert(data);
                      console.log(a.value);
                     // this.router.navigate(['login'])
                    },error=>{
                      console.log(JSON.stringify(error.json()));
                    })

                    
  }

  // edit = function(kk) {  
  //   this.id = kk._id;  
  //   this.name= kk.name;  
  //   this.address= kk.address;  
  //   this.valbutton ="Update";  
  //   }  
      
  //   delete = function(id) {  
  //   this.newService.deleteUser(id)  
  //   .subscribe(data =>   { alert(data.data) ; this.ngOnInit();}, error => this.errorMessage = error )   
  //   }  
      
}
   
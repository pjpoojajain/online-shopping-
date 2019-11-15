import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class BagService {

  
  constructor(private httpClient:HttpClient) { }

  public read():Observable<any[]>
  {
    return this.httpClient.get<any[]>("./assets/bag.json");
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class MobileService {

  constructor(private httpClient:HttpClient) { }

  public read():Observable<any[]>
  {
    return this.httpClient.get<any[]>("./assets/data.json");
  }

}

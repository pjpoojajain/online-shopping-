import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class BabyAccessService {

  constructor(private http:HttpClient) { }

  public readData():Observable<any[]>
  {
    return this.http.get<any[]>("./assets/babyAcc.json");
  }
}
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class Api {

  constructor(private http: Http) {}
  basePath: string  = "http://localhost/src/server";
  getDataById(id){
    return this.http.get(`${this.basePath}/send.php`, {params :{id: id}})
    .pipe(map(res => res.json()))
    .subscribe(data => {
      console.log(data);
    });
  }


  setData(id, data){
    this.http.post(`${this.basePath}/send.php`, {id: id, data: data, isDelete: false})
    .pipe(map(res => res.json()))
    .subscribe(data => {
      console.log(data);
    });
  }


}

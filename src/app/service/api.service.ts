import {Http} from '@angular/http';
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class Api {

  constructor(private http: Http) { }

  getDataById(id){
    return this.http.get("/send.php", {params :{id: id}})
    // .pipe(map(res => res.json()))
    .subscribe(data => console.log(data));
  }

  setData(id, data){
    this.http.post("/send.php", {data: data, isDelete: false}, {params :{data: data, isDelete: false}})
    // .pipe(map(res => res.json()))
    .subscribe(data => console.log(data));
  }


}

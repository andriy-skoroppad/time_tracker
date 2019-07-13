import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class Api {

  constructor(private http: HttpClient) {}
  basePath: string  = "";
  getDataById(id: number): any{
    return new Promise((resolve, reject) => {
      this.http.get(`${this.basePath}/send.php`, {params :{id: id + ""}})
      .subscribe( data => {
        if(data[0] && data[0].data){
          try {
            data[0].data = JSON.parse(data[0].data);
          } catch (error) {
            console.error(error);
            data[0].data = [];
          }
        }
        console.log(data);
        resolve(data);
      })

    });


  }


  setData(id: number, data: any): any{
    return new Promise((resolve, reject) => {
      let jsonData: string;
      let stringId = id.toString();
      console.log(stringId);
      try {
        jsonData = JSON.stringify(data);
      } catch (error) {
        console.error(error);
        jsonData = "[]";
      }
      this.http.post(`${this.basePath}/send.php`, {id: stringId, data: jsonData})
      .pipe(map(res =>{
        return res.json();
      })).subscribe( data => {
        console.log(data);
        resolve(data);
      })
    })


  }


}

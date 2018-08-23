import { Injectable } from '@angular/core';

@Injectable()
export class Sinc {

  constructor() {}
 
  getUnicId():number{
    let unicNumber: string = getRandomInt(10000, 99999) + "";
    let ms = +(new Date()) + "";
    let dateInMs: string = (ms).slice(ms.length - 4);//4 number
    return +(dateInMs + unicNumber);
  }
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Включно з мінімальним та виключаючи максимальне значення 

}

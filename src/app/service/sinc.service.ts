import { Injectable } from '@angular/core';
import { TimerService } from '../timer/timer.service';

@Injectable()
export class Sinc {

  constructor(public TimerService: TimerService) {}
 
  getUnicId():number{
    let unicNumber: string = getRandomInt(1000, 9999) + "";
    let ms = +(new Date()) + "";
    let dateInMs: string = (ms).slice(ms.length - 4);//4 number
    return +(dateInMs + unicNumber);
  }
  getUpdateId(id: number):number{
    return +(id.toString() + "1");
  }


  mergeTwoTimeLists(firstList, secondList): object[]{
    let newList = [];
    let allList = [...firstList, ...secondList];
   
    let mapOfIds = {};
    allList.forEach(el => {
      if(!mapOfIds[el.id]){
        mapOfIds[el.id] = el;
      } else {
        if(mapOfIds[el.id].lastUpdate < el.lastUpdate){
          mapOfIds[el.id] = el;
        }
      }
    });

    for(let key in mapOfIds){
      if(mapOfIds.hasOwnProperty(key)){
        newList.push(mapOfIds[key]);
      }
    }
    newList.sort((a, b) => {
      return a.start - b.start;
    });

    newList.forEach((el, i, all) => {
      if(i){
        updateTwoElement(el, all[i-1]);
      }
    });
    let recalculationTable = (list) =>{
      for (let i = 0; i < list.length; i++){
        if(i > 0){
          list[i - 1].end = list[i].start;
          list[i - 1].spend = list[i - 1].end - list[i - 1].start;
          list[i - 1].endString = (new Date(list[i - 1].end) ).toLocaleString("ru", this.TimerService.timeConfig);
          list[i - 1].spendString = this.TimerService.toTime(list[i - 1].spend / 1000 ).string;
        }
      }
    }
    recalculationTable(newList);
    mapOfIds = null;
    allList = null;

    

    return newList;
//helper functionality
    function updateTwoElement(main, prew){
      if(main.lastUpdate >= prew.lastUpdate ){
        prew.end = main.start;
      } else {
        main.start = prew.end;
      }
    }
  
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Включно з мінімальним та виключаючи максимальне значення 

}

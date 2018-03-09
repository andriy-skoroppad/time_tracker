import { Injectable } from '@angular/core';
import {Localstore} from "../service/localstore.service";
import {IconCanvasService} from "../service/icon-canvas.service";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class TimerService {

  constructor(private localstore: Localstore, private IconCanvasService: IconCanvasService) { }
  timeEvent = new BehaviorSubject({time: this.toTime(0), deyTime: this.toTime( 0)});

  toTime(spend: number): {string: string;
    h: number;
    min: number;
    sec: number;
  }{
    if(!spend){
      return {
        string: "",
        h: 0,
        min: 0,
        sec: 0
      };
    }
    let h = Math.floor( spend / 3600 );
    let min = Math.floor( (spend - (h *  3600)) / 60 );
    let sec = Math.floor( (spend - (h *  3600) - (min * 60) ));

    return {
      string: (h + ":" + this.toTwoNumber(min) + ":"  + this.toTwoNumber(sec)),
      h: h,
      min: min,
      sec: sec
    };
  }

  toTwoNumber(val){
    if(val < 10){
      return "0" + val;
    } else {
      return "" + val;
    }
  }

  private timer: any;

  clearTimer (){
    if(this.timer){
      clearInterval(this.timer)
    }
  }

  thisTimeTreck(){
    let list = this.localstore.getAllList();
    let date = "";
    let spendTime = 0;
    for(let i = list.length - 1; i > -1; i--){
      if(!date){
        date = list[i].date;
      }
      if(list[i].date !== date){
        break;
      }
      spendTime += list[i].spend;

    }
    return spendTime;
  }

  startTimer(listFromComponent?){
    let list = listFromComponent || this.localstore.getAllList() ;
    if(!list){
      this.clearTimer();
      return false;

    }
    this.timer = setInterval(()=>{
      let time = this.toTime( (+(new Date()) - list[list.length - 1].start)/1000 );
      let deyTime = this.toTime( (this.thisTimeTreck() + +(new Date()) - list[list.length - 1].start)/1000 );
      if(time.h){
        (document.querySelector('[rel="icon"]') as HTMLLinkElement).href = this.IconCanvasService.generateCanvasURL("" + time.h, "" + time.min)
      } else {
        (document.querySelector('[rel="icon"]') as HTMLLinkElement).href = this.IconCanvasService.generateCanvasURL("" + time.min, "" + time.sec);
      }
      document.title = time.string;
      this.timeEvent.next({time: time, deyTime: deyTime});
    }, 1000);
    return true;
  }


}

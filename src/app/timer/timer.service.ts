import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Localstore} from "../service/localstore.service";
import {IconCanvasService} from "../service/icon-canvas.service";

@Injectable()
export class TimerService {

  constructor(private localstore: Localstore, private IconCanvasService: IconCanvasService) { }
  timeEvent = new BehaviorSubject(this.toTime( 0));

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

  startTimer(listFromComponent?){
    let list = listFromComponent || this.localstore.getAllList() ;
    if(!list){
      this.clearTimer();
      return false;

    }
    this.timer = setInterval(()=>{
      let time = this.toTime( (+(new Date()) - list[list.length - 1].start)/1000 );
      if(time.h){
        (document.querySelector('[rel="icon"]') as HTMLLinkElement).href = this.IconCanvasService.generateCanvasURL("" + time.h, "" + time.min)
      } else {
        (document.querySelector('[rel="icon"]') as HTMLLinkElement).href = this.IconCanvasService.generateCanvasURL("" + time.min, "" + time.sec);
      }
      document.title = time.string;
      this.timeEvent.next(time);
    }, 1000);
    return true;
  }


}

import { Component, OnInit } from '@angular/core';
import {TimerService} from './timer.service';

@Component({
  selector: 'timer-value',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  providers: [TimerService]
})
export class TimerComponent implements OnInit {

  constructor(public timerServis: TimerService) { }
  // time = this.timerServis.timeEvent.getValue().string;
  time = "";

  ngOnInit() {
    console.log("start", this.timerServis.timeEvent)
    this.timerServis.timeEvent.subscribe((value) => {
      console.log(value);
      this.time = value.string;
    });
  }

}

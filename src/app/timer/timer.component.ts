import { Component, OnInit } from '@angular/core';
import {TimerService} from './timer.service';

@Component({
  selector: 'timer-value',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor(private timerServis: TimerService) { }
  // time = this.timerServis.timeEvent.getValue().string;
  time = '';
  allDay = '';

  ngOnInit() {
    this.timerServis.timeEvent.subscribe((value) => {
      this.time = value.time.string;
      this.allDay = value.deyTime.string;
    });
  }

}

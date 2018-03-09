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
  time = "";

  ngOnInit() {
    this.timerServis.timeEvent.subscribe((value) => {
      this.time = value.string;
    });
  }

}

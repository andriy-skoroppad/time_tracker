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
  time = '10:45';
  ngOnInit() {
  }

}

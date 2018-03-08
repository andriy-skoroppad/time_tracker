import { Component , OnInit} from '@angular/core';
import {TimerService} from "./timer/timer.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(public TimerService: TimerService) { }
  ngOnInit() {
    this.TimerService.startTimer();

  }
}

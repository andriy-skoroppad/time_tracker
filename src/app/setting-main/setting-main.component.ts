import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting-main',
  templateUrl: './setting-main.component.html',
  styleUrls: ['./setting-main.component.css']
})
export class SettingMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cleareLocalSrore(): void{
  	localStorage.clear();
  }

}

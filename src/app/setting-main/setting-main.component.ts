import { Component, OnInit } from '@angular/core';
import { Localstore } from '../service/localstore.service';

@Component({
  selector: 'app-setting-main',
  templateUrl: './setting-main.component.html',
  styleUrls: ['./setting-main.component.css'],
  providers: [Localstore],
})
export class SettingMainComponent implements OnInit {

  constructor(private Localstore: Localstore) { }

  ngOnInit() {
  }

  cleareLocalSroreTrack(): void{
    this.Localstore.clear("track");
  }

}

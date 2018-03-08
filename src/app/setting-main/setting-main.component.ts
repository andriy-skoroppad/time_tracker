import { Component, OnInit } from '@angular/core';
import { Localstore } from '../service/localstore.service';
import { FileLocalService } from '../service/file-local.service';
import {TimerService} from "../timer/timer.service";

@Component({
  selector: 'app-setting-main',
  templateUrl: './setting-main.component.html',
  styleUrls: ['./setting-main.component.css'],
  providers: [Localstore, FileLocalService],
})
export class SettingMainComponent implements OnInit {

  constructor(private Localstore: Localstore, private FileLocalService: FileLocalService, private timerService: TimerService) { }

  ngOnInit() {
  }

  cleareLocalSroreTrack(): void{
    this.Localstore.clear("track");
    this.timerService.clearTimer()
  }
  saveAllSettinfToFile(): void{
    let forSave = {
      user: this.Localstore.getUser(),
      collegs: this.Localstore.getColleagues(),
      projects: this.Localstore.getProjects(),
      tasks: this.Localstore.getTasks()
    };

    this.FileLocalService.prepareFileForDownload(forSave, "settingAll.json");
  }

  loadAllSettingFromFile(): void{
    this.FileLocalService.openLocalFile().then(
      response => {
        this.Localstore.saveAllSeting(response);
      }
    )
  }

}

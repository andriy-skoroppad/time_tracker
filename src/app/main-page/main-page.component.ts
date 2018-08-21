import { Component, OnInit,  OnDestroy} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { Localstore } from '../service/localstore.service';
import { EditPopup } from '../popups/edit/popup-edit.component';
import { EditDescriptionPopup } from '../popups/edit-description/popup-edit-description.component';
import { EditProjectPopup } from '../popups/edit-project/popup-edit-project.component';
import {TimerService} from "../timer/timer.service";
import {ConnectionPopup} from "../popups/conection/popup-conection.component";
import {EditTimePopup} from "../popups/edit-time/popup-edit-time.component";
import { Api } from '../service/api.service';


interface List {
    start?: number;
    startString?: string;
  	end?: number | null;
  	endString?: string;
  	spend?: number;
  	spendString?: string;
  	project?: string;
  	tasck?: string;
  	description?: string;
  	date?: string;
    isMarked?: boolean;
    lastUpdate?: number;
}


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [Localstore, Api],
  entryComponents: [
    EditPopup,
    EditDescriptionPopup,
    EditProjectPopup,
    ConnectionPopup,
    EditTimePopup
  ]
})
export class MainPageComponent implements OnInit, OnDestroy {

  constructor(private Localstore: Localstore, private api: Api, public dialog: MatDialog, public TimerService: TimerService) { }

  list: List[];
  timer;
  timeConfig = {
    hour: 'numeric',
    minute: 'numeric',
    // second: 'numeric'
  };



  ngOnInit() {
  	this.list = this.Localstore.getAllList() || [];

  }


  startNewTask(): void{
  let timeConfig = this.timeConfig;
  let dayDateConfig = { year: 'numeric', month: 'numeric', day: 'numeric' };

  	if(this.list.length){
  		this.list[this.list.length - 1].end = +(new Date() );
  		this.list[this.list.length - 1].spend = this.list[this.list.length - 1].end - this.list[this.list.length - 1].start;
  		this.list[this.list.length - 1].endString = (new Date(this.list[this.list.length - 1].end) ).toLocaleString("ru", timeConfig);
  		this.list[this.list.length - 1].spendString = this.TimerService.toTime(this.list[this.list.length - 1].spend / 1000 ).string;

  		this.list.push({
  			start: +(new Date() ),
  			startString: (new Date() ).toLocaleString("ru", timeConfig),
  			end: null,
  			endString: "-",
  			spend: 0,
  			spendString: "-",
  			project: "-",
  			tasck: "-",
  			description: "-",
        date: (new Date() ).toLocaleString("ru", dayDateConfig),
        isMarked: false,
        lastUpdate: +(new Date() )
  		})
  	} else {
  		this.list.push({
  			start: +(new Date() ),
  			startString: (new Date() ).toLocaleString("ru", timeConfig),
  			end: null,
  			endString: "-",
  			spend: 0,
  			spendString: "-",
  			project: "-",
  			tasck: "-",
  			description: "-",
        date: (new Date() ).toLocaleString("ru", dayDateConfig),
        isMarked: false,
        lastUpdate: +(new Date() )
  		})
  	}

    this.TimerService.clearTimer();
    this.TimerService.startTimer(this.list);

    this.Localstore.setAllList(this.list);
  }

  editTask(listItem) :void {
    let dialogRef = this.dialog.open(EditPopup, {
      // width: '300px',
      data: { text : "Enter task", value: (listItem.tasck !== "-"? listItem.tasck: "")}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        listItem.tasck = result || "-";
        listItem.lastUpdate = +(new Date() );
        this.Localstore.setAllList(this.list);
      }
    });
  }

  editDescription(listItem) :void {

    let dialogRef = this.dialog.open(EditDescriptionPopup, {
      // width: '300px',
      data: { value: (listItem.description !== "-"? listItem.description: "") }
    });

    dialogRef.afterClosed().subscribe(result => {

      console.log(result)
      if(result){
        listItem.description = result || "-";
        listItem.lastUpdate = +(new Date() );
        this.Localstore.setAllList(this.list);
      }
    });
  }

  editProject(listItem): void{
    let dialogRef = this.dialog.open(EditProjectPopup, {
      // width: '300px',
      data: { value: (listItem.project !== "-"? listItem.project: "")}
    });

    dialogRef.afterClosed().subscribe(result => {

      console.log(result)
      if(result){
        listItem.project = result || "-";
        listItem.lastUpdate = +(new Date() );
        this.Localstore.setAllList(this.list);
      }
    });
  }

  checkAsMarked (listItem){
    listItem.isMarked = !listItem.isMarked;
    listItem.lastUpdate = +(new Date() );
    this.Localstore.setAllList(this.list);
  }

  cleareLocalSroreTrack(): void{
    this.list = [];
    this.Localstore.clear("track");
    this.TimerService.clearTimer()
  }

  synchronization(): void{
    let dialogRef = this.dialog.open(ConnectionPopup, {
      // width: '300px',
      data: ""
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
  editStartTime(listItem, prewListItem){
    let dialogRef = this.dialog.open(EditTimePopup, {
      // width: '300px',
      data: {
        timeConfig: this.timeConfig,
        thisStart: listItem.start,
        prewStart: (prewListItem ? prewListItem.start : 0)
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log(result);
        listItem.start = +result;
        listItem.startString = result.toLocaleString("ru", this.timeConfig);
        this.recalculationTable();
        this.Localstore.setAllList(this.list);
        this.TimerService.clearTimer();
        this.TimerService.startTimer(this.list);
      }
    });
  }

  recalculationTable(){
    for (let i = 0; i < this.list.length; i++){
      if(i > 0){
        this.list[i - 1].end = this.list[i].start;
        this.list[i - 1].spend = this.list[i - 1].end - this.list[i - 1].start;
        this.list[i - 1].endString = (new Date(this.list[i - 1].end) ).toLocaleString("ru", this.timeConfig);
        this.list[i - 1].spendString = this.TimerService.toTime(this.list[i - 1].spend / 1000 ).string;
      }
    }
    console.log(this.list)
  }

  sendData(){
    this.api.setData(21589, {dsd: 12});
  }
  getData(){
    this.api.getDataById(1);
  }

  ngOnDestroy() {

  }
}

import { Component, OnInit,  OnDestroy} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { Localstore } from '../service/localstore.service';
import { IconCanvasService } from '../service/icon-canvas.service';
import { EditPopup } from '../popups/edit/popup-edit.component';
import { EditDescriptionPopup } from '../popups/edit-description/popup-edit-description.component';
import { EditProjectPopup } from '../popups/edit-project/popup-edit-project.component';


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
}


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [Localstore, IconCanvasService],
  entryComponents: [
    EditPopup,
    EditDescriptionPopup,
    EditProjectPopup
  ]
})
export class MainPageComponent implements OnInit, OnDestroy {

  constructor(private Localstore: Localstore, private IconCanvasService: IconCanvasService, public dialog: MatDialog) { }

  list: List[];
  timer;

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

  ngOnInit() {
  	this.list = this.Localstore.getAllList() || [];

  }

  startNewTask(): void{
  	let timeConfig = {
			hour: 'numeric',
  		minute: 'numeric',
  		// second: 'numeric'
  	};

  	if(this.list.length){
  		this.list[this.list.length - 1].end = +(new Date() );
  		this.list[this.list.length - 1].spend = this.list[this.list.length - 1].end - this.list[this.list.length - 1].start;
  		this.list[this.list.length - 1].endString = (new Date(this.list[this.list.length - 1].end) ).toLocaleString("ru", timeConfig);
  		this.list[this.list.length - 1].spendString = this.toTime(this.list[this.list.length - 1].spend / 1000 ).string;

  		this.list.push({
  			start: +(new Date() ),
  			startString: (new Date() ).toLocaleString("ru", timeConfig),
  			end: null,
  			endString: "-",
  			spend: 0,
  			spendString: "-",
  			project: "-",
  			tasck: "-",
  			description: "-"
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
  			description: "-"
  		})
  	}

  	clearInterval(this.timer);
  	this.timer = setInterval(()=>{
      let time = this.toTime( (+(new Date()) - this.list[this.list.length - 1].start)/1000 );
      if(time.h){
        (document.querySelector('[rel="icon"]') as HTMLLinkElement).href = this.IconCanvasService.generateCanvasURL("" + time.h, "" + time.min)
      } else {
        (document.querySelector('[rel="icon"]') as HTMLLinkElement).href = this.IconCanvasService.generateCanvasURL("" + time.min, "" + time.sec);
      }
  		document.title = time.string;
  	}, 1000);

    this.Localstore.setAllList(this.list);
  }

  editTask(listItem) :void {
    let dialogRef = this.dialog.open(EditPopup, {
      // width: '300px',
      data: { text : "Enter task", value: listItem.tasck}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        listItem.tasck = result;
        this.Localstore.setAllList(this.list);
      }
    });
  }

  editDescription(listItem) :void {
    let dialogRef = this.dialog.open(EditDescriptionPopup, {
      // width: '300px',
      data: { value: listItem.description}
    });

    dialogRef.afterClosed().subscribe(result => {

      console.log(result)
      if(result){
        listItem.description = result;
        this.Localstore.setAllList(this.list);
      }
    });
  }

  editProject(listItem): void{
    let dialogRef = this.dialog.open(EditProjectPopup, {
      // width: '300px',
      data: { value: listItem.project}
    });

    dialogRef.afterClosed().subscribe(result => {

      console.log(result)
      if(result){
        listItem.project = result;
        this.Localstore.setAllList(this.list);
      }
    });
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}

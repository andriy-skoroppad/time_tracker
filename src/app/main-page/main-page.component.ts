import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { Localstore } from '../service/localstore.service';

interface List {
    start?: number,
    startString?: string,
  	end?: number | null,
  	endString?: string,
  	spend?: number,
  	spendString?: string,
  	project?: string,
  	tasck?: string,
  	description?: string
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [Localstore],
  entryComponents: []
})
export class MainPageComponent implements OnInit {

  constructor(private Localstore: Localstore, public dialog: MatDialog) { }

  list: List[];
  timer;

  toTime(spend: number): string{
  	if(!spend){
  		return "";
  	}
  	let h = Math.floor( spend / 3600 );
  	let min = Math.floor( (spend - (h *  3600)) / 60 );
  	let sec = Math.floor( (spend - (h *  3600) - (min * 60) ));
  	
  	


  	return (h + ":" + this.toTwoNumber(min) + ":"  + this.toTwoNumber(sec));
  }

  toTwoNumber(val){
  	if(val < 10){
  		return "0" + val;
  	} else {
  		return "" + val;
  	}
  }

  ngOnInit() {
  	let tipObject = {
  		start: 1200002221,
  		end: null,
  		spend: 0,
  		project: "",
  		tasck: "7545",
  		description: "",
  	}
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
  		this.list[this.list.length - 1].spendString = this.toTime(this.list[this.list.length - 1].spend / 1000 );

  		this.list.push({
  			start: +(new Date() ),
  			startString: (new Date() ).toLocaleString("ru", timeConfig), 
  			end: null,
  			endString: "-",
  			spend: 0,
  			spendString: "-",
  			project: "грлдодло",
  			tasck: "80980",
  			description: "пппппппппп"
  		})
  	} else {
  		this.list.push({
  			start: +(new Date() ),
  			startString: (new Date() ).toLocaleString("ru", timeConfig), 
  			end: null,
  			endString: "-",
  			spend: 0,
  			spendString: "-",
  			project: "прпар пар",
  			tasck: "7000",
  			description: "зфшк пмра рпарпар орпаоро"
  		})
  	}
  	clearInterval(this.timer);
  	this.timer = setInterval(()=>{
  		document.title = this.toTime( (+(new Date()) - this.list[this.list.length - 1].start)/1000 );
  	}, 1000)
  	
  }

}

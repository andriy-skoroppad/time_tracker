import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { Localstore } from '../../service/localstore.service';

import { EditPopup } from '../../popups/edit/popup-edit.component';
import { DeletePopup } from '../../popups/delete/popup-delete.component';

@Component({
  selector: 'app-colleges-setting',
  templateUrl: './colleges-setting.component.html',
  styleUrls: ['./colleges-setting.component.css'],
  providers: [Localstore],
  entryComponents: [
    EditPopup,
    DeletePopup
  ]
})
export class CollegesSettingComponent implements OnInit {

  constructor(private Localstore: Localstore, public dialog: MatDialog) { }
  colleagues: object[];

  ngOnInit() {
  	this.colleagues = this.Localstore.getColleagues() || [];
  }

  deletePopup(colleague: object) :void {
     let dialogRef = this.dialog.open(DeletePopup, {
      // width: '300px',
      data: { text : "Delete From List"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if(result){
      	let newList = [];
      	for(let i = 0; i < this.colleagues.length; i++){
      		if(this.colleagues[i] !== colleague){
      			newList.push(this.colleagues[i]);
      		}
      	}

        this.colleagues = newList;
        this.Localstore.setColleagues(this.colleagues);
      }
    });
  }


  openDialog(colleague?): void {
    let dialogRef = this.dialog.open(EditPopup, {
      // width: '300px',
      data: { value: (colleague ? colleague.name : ''), text: "Enter name" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
      	if(colleague){
			colleague.name = result;
      	} else {
      		this.colleagues.push({name: result})
      	}
        this.Localstore.setColleagues(this.colleagues);
      }

    });
  }
}

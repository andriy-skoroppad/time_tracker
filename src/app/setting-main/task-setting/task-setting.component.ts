import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Localstore } from '../../service/localstore.service';

import { EditQuickTaskPopup } from '../../popups/edit-quick-task/popup-edit-quick-task.component';
import { DeletePopup } from '../../popups/delete/popup-delete.component';

@Component({
  selector: 'app-task-setting',
  templateUrl: './task-setting.component.html',
  styleUrls: ['./task-setting.component.css'],
  providers: [Localstore],
  entryComponents: [
    EditQuickTaskPopup,
    DeletePopup
  ]
})
export class TaskSettingComponent implements OnInit {

  constructor(private Localstore: Localstore, public dialog: MatDialog) { }
  tasks: object[];

  ngOnInit() {
  	this.tasks = this.Localstore.getTasks() || [];
  }

  deletePopup(task: object) :void {
     let dialogRef = this.dialog.open(DeletePopup, {
      // width: '300px',
      data: { text : "Delete From List"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if(result){
      	let newList = [];
      	for(let i = 0; i < this.tasks.length; i++){
      		if(this.tasks[i] !== task){
      			newList.push(this.tasks[i]);
      		}
      	}

        this.tasks = newList;
        this.Localstore.setTasks(this.tasks);
      }
    });
  }


  openDialog(task?): void {
    let dialogRef = this.dialog.open(EditQuickTaskPopup, {
      // width: '300px',
      data: { task: (task ? task.task : ''), isNeedColleagues: (task ? task.isNeedColleagues : false) }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
      	if(task){
					task.task = result.task;
					task.isNeedColleagues = result.isNeedColleagues;
      	} else {
      		this.tasks.push({task: result.task, isNeedColleagues: result.isNeedColleagues})
      	}
        this.Localstore.setTasks(this.tasks);
      }

    });

	}
}

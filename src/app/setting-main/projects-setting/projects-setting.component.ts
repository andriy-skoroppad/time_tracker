import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { Localstore } from '../../service/localstore.service';

import { EditPopup } from '../../popups/edit/popup-edit.component';
import { DeletePopup } from '../../popups/delete/popup-delete.component';

@Component({
  selector: 'app-projects-setting',
  templateUrl: './projects-setting.component.html',
  styleUrls: ['./projects-setting.component.css'],
  providers: [Localstore],
  entryComponents: [
    EditPopup,
    DeletePopup
  ]
})
export class ProjectsSettingComponent implements OnInit {

  constructor(private Localstore: Localstore, public dialog: MatDialog) { }
  projects: object[];

  ngOnInit() {
  	this.projects = this.Localstore.getProjects() || [];
  }

  deletePopup(project: object) :void {
     let dialogRef = this.dialog.open(DeletePopup, {
      // width: '300px',
      data: { text : "Delete From List"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if(result){
      	let newList = [];
      	for(let i = 0; i < this.projects.length; i++){
      		if(this.projects[i] !== project){
      			newList.push(this.projects[i]);
      		}
      	}

        this.projects = newList;
        this.Localstore.setProjects(this.projects);
      }
    });
  }


  openDialog(project): void {
    let dialogRef = this.dialog.open(EditPopup, {
      // width: '300px',
      data: { value: (project ? project.name : ''), text: "Enter name" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
      	if(project){
			project.name = result;
      	} else {
      		this.projects.push({name: result})
      	}
        this.Localstore.setProjects(this.projects);
      }
      
    });
  }
}

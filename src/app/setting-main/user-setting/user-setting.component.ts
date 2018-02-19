import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { Localstore } from '../../service/localstore.service';
import { EditNamePopup } from './popup/popup.component';
import { DeletePopup } from '../../popups/delete/popup-delete.component';

@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.css'],
  providers: [Localstore],
  entryComponents: [
    EditNamePopup,
    DeletePopup
  ]
})
export class UserSettingComponent implements OnInit {

  constructor(private Localstore: Localstore, public dialog: MatDialog) { }
  user: string;

  ngOnInit() {
  	this.user = this.Localstore.getUser();
  }

  deletePopup() :void {
     let dialogRef = this.dialog.open(DeletePopup, {
      // width: '300px',
      data: { text : "Delete User"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if(result){
        this.user = '';
        this.Localstore.setUser(this.user);
      }
    });
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(EditNamePopup, {
      // width: '300px',
      data: { name: this.user }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.user = result;
        this.Localstore.setUser(this.user);
      }

    });
  }

}

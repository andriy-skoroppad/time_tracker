import {Component, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'popup-component',
  templateUrl: 'popup.component.html',
})
export class EditNamePopup {
	

  constructor(
    public dialogRef: MatDialogRef<EditNamePopup>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
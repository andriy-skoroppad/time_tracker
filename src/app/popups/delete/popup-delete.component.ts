import {Component, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'popup-delete-component',
  templateUrl: 'popup-delete.component.html',
})
export class DeletePopup {
	

  constructor(
    public dialogRef: MatDialogRef<DeletePopup>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
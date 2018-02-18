import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'popup-edit-component',
  templateUrl: 'popup-edit.component.html',
})
export class EditPopup {
	

  constructor(
    public dialogRef: MatDialogRef<EditPopup>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

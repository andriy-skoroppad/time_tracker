import {Component, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'popup-edit-quick-task-component',
  templateUrl: 'popup-edit-quick-task.component.html',
})
export class EditQuickTaskPopup {
	

  constructor(
    public dialogRef: MatDialogRef<EditQuickTaskPopup>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

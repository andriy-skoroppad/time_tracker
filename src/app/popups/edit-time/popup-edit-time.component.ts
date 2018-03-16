import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'popup-edit-time-component',
  templateUrl: 'popup-edit-time.component.html',
})
export class EditTimePopup implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<EditTimePopup>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  prewTime: string;
  thisTime: string;

  onNoClick(): void {
    this.dialogRef.close();
  }
  returnValidValue(){
    let arrayOfTime = this.thisTime.split(":");
    if(arrayOfTime.length > 1){
      let date = new Date(this.data.thisStart);
      date.setHours(+arrayOfTime[0] > 24 ? 24 : +arrayOfTime[0]   );
      date.setMinutes(+arrayOfTime[1] > 60 ? 60 : +arrayOfTime[1]);
      return date;
    } else {
      return this.data.thisStart;
    }
  }

  ngOnInit(){
    this.prewTime = (new Date(this.data.prewStart) ).toLocaleString("ru", this.data.timeConfig);
    this.thisTime = (new Date(this.data.thisStart) ).toLocaleString("ru", this.data.timeConfig);
    console.log(this.thisTime);
  }

}

import {Component, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Localstore } from '../../service/localstore.service';

interface Selected {
  task?: string;
  name?: string;
  isNeedColleagues?: boolean;
}

@Component({
  selector: 'popup-edit-description-component',
  templateUrl: 'popup-edit-description.component.html',
  providers: [Localstore],
})


export class EditDescriptionPopup {

  constructor(
    private Localstore: Localstore,
    public dialogRef: MatDialogRef<EditDescriptionPopup>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  generateTextForDescription(): string {
    let text: string = "";
    text += this.selected.task;
    if(this.colleaguesSelected.name){
      text += " with " + this.colleaguesSelected.name;
    }

    return text;
  }

  selectQDescr (){
    this.data.value = this.generateTextForDescription();
  }
  selectQName (){
    this.data.value = this.generateTextForDescription();
  }

  selected: Selected = {};
  colleaguesSelected: Selected= {};
  listOfDescriptions = this.Localstore.getTasks();
  colleagues = this.Localstore.getColleagues();
  onNoClick(): void {
    this.dialogRef.close();
  }

}

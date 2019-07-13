import {Component, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Localstore } from '../../service/localstore.service';

interface Selected {
  name?: string;
}

@Component({
  selector: 'popup-edit-project-component',
  templateUrl: 'popup-edit-project.component.html',
  providers: [Localstore],
})


export class EditProjectPopup {

  constructor(
    private Localstore: Localstore,
    public dialogRef: MatDialogRef<EditProjectPopup>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  generateTextForDescription(): string {
    let text: string = "";
    text += this.selected.name;
    return text;
  }

  selectQDescr (){
    this.data.value = this.generateTextForDescription();
  }
  selectQName (){
    this.data.value = this.generateTextForDescription();
  }

  selected: Selected = {};
  listOfProject = this.Localstore.getProjects();
  onNoClick(): void {
    this.dialogRef.close();
  }

}

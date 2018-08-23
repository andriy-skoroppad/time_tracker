import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Sinc } from '../../service/sinc.service';
import { Api } from '../../service/api.service';
import { Localstore } from '../../service/localstore.service';

@Component({
  selector: 'popup-qrcode-component',
  templateUrl: 'popup-qrcode.component.html',
})
export class QrcodePopup implements OnInit {


  constructor(
    private sinc: Sinc,
    private api: Api,
    private localstore: Localstore,
    public dialogRef: MatDialogRef<QrcodePopup>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  bathePath: string = "sinc/";
  url: string;
  unicId: number;

  onNoClick(): void {
    this.dialogRef.close();
  }
  returnValidValue(){
    // let arrayOfTime = this.thisTime.split(":");
    // if(arrayOfTime.length > 1){
    //   let date = new Date(this.data.thisStart);
    //   date.setHours(+arrayOfTime[0] > 24 ? 24 : +arrayOfTime[0]   );
    //   date.setMinutes(+arrayOfTime[1] > 60 ? 60 : +arrayOfTime[1]);
    //   return date;
    // } else {
    //   return this.data.thisStart;
    // }
  }

  ngOnInit(){
    let domain: string;
    window.location.href.replace(/(?:.+\/\/)?.+\//, (mach) => {
      domain = mach;
      return mach;
    } );
    this.unicId = this.sinc.getUnicId();
    this.url = domain + this.bathePath + this.unicId;
    this.api.setData(this.unicId, this.localstore.getAllList());
    console.log(this.url);
    
    
  }

}

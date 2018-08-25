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
  interval: any;

  onNoClick(): void {
    this.dialogRef.close();
    clearInterval(this.interval);
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
  whaiteDataWithUpdate(id: number){
    return new Promise((resolve, reject) => {
      let counter = 0;
      this.interval = setInterval(()=>{
        if(counter > 30){
          clearInterval(this.interval);
          reject("Long time");
        } else {
          this.api.getDataById(this.sinc.getUpdateId(id)).then((data: any) => {
            if(data.messege){
              reject(data);
            } else if(data[0]){
              clearInterval(this.interval);
              resolve(data[0]);
            }
          });
        }
        counter++
      }, 5000)
    });
  }

  ngOnInit(){
    let domain: string;
    window.location.href.replace(/(?:.+\/\/)?.+\//, (mach) => {
      domain = mach;
      return mach;
    } );
    this.unicId = this.sinc.getUnicId();
    this.url = domain + this.bathePath + this.unicId;
    this.api.setData(this.unicId, this.localstore.getAllList()).then((data:any) => {
      if(data && data.data){
        this.whaiteDataWithUpdate(this.unicId)
        .then( (data: any) => {
          this.localstore.setAllList(data["data"]);
          this.dialogRef.close();
        })
        .catch(error => {
          console.error(error);
          this.dialogRef.close();
        });
      } else {
        console.error(data);
        this.dialogRef.close();
      }
    });
    
    console.log(this.url);
    
    
  }

}

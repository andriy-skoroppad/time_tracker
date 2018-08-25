import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Sinc } from '../service/sinc.service';
import { Api } from '../service/api.service';
import { Localstore } from '../service/localstore.service';


@Component({
  selector: 'app-sinc-page',
  templateUrl: './sinc-page.component.html',
  styleUrls: ['./sinc-page.component.css']
})
export class SincPageComponent implements OnInit {

  constructor(
    private sinc: Sinc,
    private api: Api,
    private localstore: Localstore,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  paramMaps;

  startSinc (id){
    this.api.getDataById(id)
    .then(response => {
      if(response[0]){
        this.updateLocalData(response[0].data)
        this.endSinc(id);
      } else {
        console.error("no such id in DB - " + id);
        this.router.navigate([""]);
      }
    });;
  }

  updateLocalData(serverList){
    this.localstore.setAllList( this.sinc.mergeTwoTimeLists(serverList, this.localstore.getAllList()) );
  }

  endSinc(id){
    this.api.setData(this.sinc.getUpdateId(id), this.localstore.getAllList()).then(data => {
      this.router.navigate([""]);
    });
    
  }


  ngOnInit() {
    this.paramMaps = this.route.paramMap.pipe(
      switchMap( (params: ParamMap) => {
        console.log(params.get('id'));
        this.startSinc(params.get('id'))
      return params.get('id');
    })).subscribe(id => {});
  }

}

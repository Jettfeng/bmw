import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StationService } from '../services/station.service';
import {TranslateService, TranslationChangeEvent} from '@ngx-translate/core';
declare var UIkit: any;

@Component({
  selector: 'app-station-edit',
  templateUrl: './station-edit.component.html',
  styleUrls: ['./station-edit.component.scss']
})
export class StationEditComponent implements OnInit {

  dealerId = '';
  stationId = '';
  loading = false;

  confirmModal = {
    elementId:"station-edit-confirm-modal",
    detail:this.translate.instant("Do you confirm to update Station?"),
    state:"",
  };

  station = {
    name: '',
    detail: '',
  };

  constructor(private router : Router, private activeRoute: ActivatedRoute, private stationService: StationService, private translate: TranslateService) {
    this.stationId = activeRoute.snapshot.params['stationId'];
    this.dealerId = activeRoute.snapshot.params['dealerId'];
  }

  ngOnInit() {
    this.loadStation();
  }

  loadStation(){
    this.loading=true;
    this.stationService.get(this.stationId).then((res:any)=>{
      this.station = res.data.station;
      this.loading=false;
    }).catch((err:any)=>{
      this.loading=false;
      UIkit.notification({
        message: this.translate.instant('Cannot load Station'),
        status: 'warning',
        timeout: 1000
      })
    })
  }

  editStation(){
    let _elementId = "#"+this.confirmModal.elementId;
    UIkit.modal(_elementId).show();
  }

  cancelStation(){
    let _elementId = "#"+this.confirmModal.elementId;
    UIkit.modal(_elementId).$destroy(true);
    this.router.navigate(['station', 'config', this.dealerId]);
  }

  onClickConfirmModal(event){
    let _elementId = "#"+this.confirmModal.elementId;
    if(event){
      this.loading=true;
      this.stationService.edit(this.station).then((res:any)=>{
        UIkit.modal(_elementId).hide();
        this.loading=false;
        UIkit.util.on(_elementId, 'hidden', function () {
          UIkit.modal(_elementId).$destroy(true);
        });
        UIkit.modal(_elementId).hide();
        this.router.navigate(['station', 'config', this.dealerId]);
      }).catch((err:any)=>{
        UIkit.modal(_elementId).hide();
        this.loading=false;
        UIkit.notification({
          message: this.translate.instant('Cannot edit station'),
          status: 'warning',
          timeout: 1000
        })
      })
    }else{
      UIkit.modal(_elementId).hide();
    }
  }


}

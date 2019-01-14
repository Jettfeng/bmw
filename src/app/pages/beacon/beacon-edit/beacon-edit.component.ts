import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BeaconService } from '../services/beacon.service';
import {TranslateService, TranslationChangeEvent} from '@ngx-translate/core';
declare var UIkit: any;

@Component({
  selector: 'app-beacon-edit',
  templateUrl: './beacon-edit.component.html',
  styleUrls: ['./beacon-edit.component.scss']
})
export class BeaconEditComponent implements OnInit {

  dealerId = '';
  beaconId = '';
  loading = false;

  confirmModal = {
    elementId:"beacon-edit-confirm-modal",
    detail:this.translate.instant("Do you confirm to update User?"),
    state:"",
  }
  
  beacon = {
    uuid: '',
    name:'',
  }

  constructor(private router : Router, private activeRoute : ActivatedRoute, private beaconService: BeaconService, private translate: TranslateService) { 
    this.beaconId = activeRoute.snapshot.params['beaconId'];
    this.dealerId = activeRoute.snapshot.params['dealerId'];
  }

  ngOnInit() {
    this.loadBeacon();
  }

  loadBeacon(){
    this.beaconService.get(this.beaconId).then((res:any)=>{
      this.loading=false;
      this.beacon = res.data.beacon;
    }).catch((err:any)=>{
      this.loading=false;
      UIkit.notification({
        message: err,
        status: 'warning',
        timeout: 1000
      })
    })
  }

  editBeacon(){
    if(this.beacon.uuid == ""){
      UIkit.notification({
        message: this.translate.instant("Beacon UUID cannot emptry"),
        status: 'warning',
        timeout: 1000
      })
      return;
    }
    if(this.beacon.name == ""){
      UIkit.notification({
        message: this.translate.instant("Beacon Name cannot emptry"),
        status: 'warning',
        timeout: 1000
      })
      return;
    }
    this.beacon.uuid = this.beacon.uuid.toLowerCase();
    let _elementId = "#"+this.confirmModal.elementId;
    this.confirmModal.detail = this.translate.instant("Do you confirm to update")+" "+ this.beacon.name +" "+this.translate.instant("Beacon")+"?";
    UIkit.modal(_elementId).show();
  }

  cancelBeacon(){
    let _elementId = "#"+this.confirmModal.elementId;
    UIkit.modal(_elementId).$destroy(true);
    this.router.navigate(['beacon', 'list', this.dealerId]);
  }

  onClickConfirmModal(event){
    let _elementId = "#"+this.confirmModal.elementId;
    if(event){
      this.loading=true;
      this.beaconService.edit(this.beacon).then((res:any)=>{
        this.loading=false;
        UIkit.util.on(_elementId, 'hidden', function () {
          UIkit.modal(_elementId).$destroy(true);
        });
        UIkit.modal(_elementId).hide();
        this.router.navigate(['beacon', 'list', this.dealerId]);
      }).catch((err:any)=>{
        UIkit.modal(_elementId).hide();
        this.loading=false;
        UIkit.notification({
          message: err,
          status: 'warning',
          timeout: 1000
        })
      })

    }else{
      UIkit.modal(_elementId).hide();
    }
  }

}

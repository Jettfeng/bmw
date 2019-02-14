import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BeaconService } from '../services/beacon.service';
import {TranslateService, TranslationChangeEvent} from '@ngx-translate/core';
declare var UIkit: any;

@Component({
  selector: 'app-beacon-register',
  templateUrl: './beacon-register.component.html',
  styleUrls: ['./beacon-register.component.scss']
})
export class BeaconRegisterComponent implements OnInit {

  dealerId = '';
  beaconId = '';
  loading = false;

  confirmModal = {
    elementId:"beacon-register-confirm-modal",
    detail:this.translate.instant("Do you confirm to create new Beacon?"),
    state:"",
  }
  
  beacon = {
    uuid: '',
    name:'',
  }

  constructor(private router : Router, private activeRoute : ActivatedRoute, private beaconService: BeaconService, private translate: TranslateService) { 
   
    this.dealerId = activeRoute.snapshot.params['dealerId'];
  }

  ngOnInit() {
     
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
      this.beaconService.create(this.dealerId,this.beacon).then((res:any)=>{
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

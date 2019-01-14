import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NodeService } from '../services/node.service';
import {TranslateService, TranslationChangeEvent} from '@ngx-translate/core';
declare var UIkit: any;

@Component({
  selector: 'app-node-edit',
  templateUrl: './node-edit.component.html',
  styleUrls: ['./node-edit.component.scss']
})
export class NodeEditComponent implements OnInit {

  dealerId = '';
  nodeId = '';
  loading = false;

  confirmModal = {
    elementId:"node-edit-confirm-modal",
    detail:this.translate.instant("Do you confirm to update BLENode?"),
    state:"",
  }

  node = {
    dev_eui: '',
    name: '',
    station_id: '',
  }

  stations = [];

  constructor(private router : Router, private activeRoute : ActivatedRoute, private nodeService: NodeService, private translate: TranslateService) { 
    this.nodeId = activeRoute.snapshot.params['nodeId'];
    this.dealerId = activeRoute.snapshot.params['dealerId'];
  }

  ngOnInit() {
    this.loadStation();
  }

  loadStation(){
    this.loading=true;
    this.nodeService.get(this.nodeId).then((res:any)=>{
      this.nodeService.allStation(this.dealerId).then((res:any)=>{
        this.stations = res.data.station;
        this.loading=false;
      }).catch((err:any)=>{
        UIkit.notification({
          message: err,
          status: 'warning',
          timeout: 1000
        })
        this.loading=false;
      })
      this.node = res.data.blenode;
    }).catch((err:any)=>{
      this.loading=false;
      UIkit.notification({
        message: err,
        status: 'warning',
        timeout: 1000
      })
    })
  }

  editStation(){
    if(this.node.dev_eui == ""){
      UIkit.notification({
        message: this.translate.instant("Dev EUI cannot emptry"),
        status: 'warning',
        timeout: 1000
      })
      return;
    }
    if(this.node.name == ""){
      UIkit.notification({
        message: this.translate.instant("Name cannot emptry"),
        status: 'warning',
        timeout: 1000
      })
      return;
    }
    this.node.dev_eui = this.node.dev_eui.toUpperCase();

    let _elementId = "#"+this.confirmModal.elementId;
    UIkit.modal(_elementId).show();
  }

  cancelStation(){
    let _elementId = "#"+this.confirmModal.elementId;
    UIkit.modal(_elementId).$destroy(true);
    this.router.navigate(['node', 'config', this.dealerId]);
  }

  onClickConfirmModal(event){
    let _elementId = "#"+this.confirmModal.elementId;
    if(event){
      this.loading=true;
      this.nodeService.edit(this.node, this.dealerId).then((res:any)=>{
        this.loading=false;
        UIkit.util.on(_elementId, 'hidden', function () {
          UIkit.modal(_elementId).$destroy(true);
        });
        UIkit.modal(_elementId).hide();
        this.router.navigate(['node', 'config', this.dealerId]);
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

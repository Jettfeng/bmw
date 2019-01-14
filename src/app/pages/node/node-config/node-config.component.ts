import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';
import { NodeService } from '../services/node.service';
import {TranslateService, TranslationChangeEvent} from '@ngx-translate/core';
declare var UIkit: any;

@Component({
  selector: 'app-node-config',
  templateUrl: './node-config.component.html',
  styleUrls: ['./node-config.component.scss']
})
export class NodeConfigComponent implements OnInit {

  dealerId = '';
  loading = false;
  devEUI = '';
  nodeName = '';
  stations = [];

  pageController = {
    itemPerPage: 10,
    itemNumber: 0,
    pageNumber: 0,
    pageIndex: 1,
    pageArray: [],
  };
  
  nodes = [];

  node = {
    "name":'',
    "dev_eui":'',
    "station_id": 0,
  };

  confirmModal = {
    elementId:"node-config-confirm-modal",
    detail:"",
    state:"",
  }
  
//mockup
deleteIndex=0;
//mockup

  constructor(private router : Router, private activeRoute: ActivatedRoute, private nodeService: NodeService, private translate: TranslateService) {
    this.dealerId = activeRoute.snapshot.params['dealerId'];
  }

  ngOnInit() {
    this.loadNode();
  }

  loadNode(){
    this.loading = true;
    this.nodeService.list(this.dealerId, (this.pageController.pageIndex - 1) * this.pageController.itemPerPage, this.pageController.itemPerPage).then((res:any)=>{
      this.pageController.itemNumber = res.data.count;
      this.pageController.pageNumber = Math.ceil(this.pageController.itemNumber / this.pageController.itemPerPage);
      this.pageController.pageArray = [];

      ///make pagination
      this.pageController.pageArray.push(this.pageController.pageIndex);
      for(let count = 0 ; count < 3 ; count++){
        if(this.pageController.pageIndex - count - 1 > 0 ){
          this.pageController.pageArray.unshift(this.pageController.pageIndex - count - 1);
        }
      }
      for(let count = 0 ; count < 3 ; count++){
        if(this.pageController.pageIndex + count < this.pageController.pageNumber){
          this.pageController.pageArray.push(this.pageController.pageIndex + count + 1);
        }
      }
      this.nodes = res.data.blenode;

      this.nodeService.allStation(this.dealerId).then((res:any)=>{
        this.stations = res.data.station;
        this.loading = false;
      }).catch((err:any)=>{
        this.loading = false;
      });
    }).catch((err:any)=>{
      this.loading = false;
    });
  }

  changePageonClick(option, index){
    if(option){
      this.pageController.pageIndex = index;
    }else{
      this.pageController.pageIndex += index;
    }
    this.loadNode();
  }

  addNode(){
    let _elementId = "#"+this.confirmModal.elementId;
    if(this.node.dev_eui !='' && this.node.name !='' && this.node.station_id != 0){
      this.confirmModal.detail=this.translate.instant("Do you confirm to add")+" "+this.node.name +" "+this.translate.instant("blenode")+"?";
      this.confirmModal.state="add";
      UIkit.modal(_elementId).show();
    } else {
      if(this.node.dev_eui ==''){
        UIkit.notification({
          message: this.translate.instant('devEUI cannot emtry!!!'),
          status: 'warning',
          timeout: 1000
        });
      }
      if(this.node.name ==''){
        UIkit.notification({
          message: this.translate.instant('Node name cannot emtry!!!'),
          status: 'warning',
          timeout: 1000
        });
      }
      if(this.node.station_id == 0){
        UIkit.notification({
          message: this.translate.instant('Please select station'),
          status: 'warning',
          timeout: 1000
        });
      }
    }
  }

  editNode(nodeId){
    let _elementId = "#"+this.confirmModal.elementId;
    UIkit.modal(_elementId).$destroy(true);
    this.router.navigate(['node', 'edit', this.dealerId, nodeId]);
  }

  deleteNode(index, name){
    let _elementId = "#"+this.confirmModal.elementId;
    this.deleteIndex = index;
    this.confirmModal.detail=this.translate.instant("Do you confirm to delete")+" "+name+" "+this.translate.instant("blenode")+"?";
    this.confirmModal.state="delete";
    UIkit.modal(_elementId).show();
  }

  onClickConfirmModal(event){
    let _elementId = "#"+this.confirmModal.elementId;
    if(event){
      this.loading = true;
      if(this.confirmModal.state == "add"){
        this.nodeService.create(this.dealerId, this.node).then((res:any)=>{
          this.node.dev_eui ='';
          this.node.name ='';
          this.node.station_id = 0;
          UIkit.modal(_elementId).hide();
          this.loading = false;
          this.loadNode();
        }).catch((err:any)=>{
          UIkit.modal(_elementId).hide();
          this.loading = false;
          UIkit.notification({
            message: err,
            status: 'warning',
            timeout: 1000
          });
        })
      }else if(this.confirmModal.state == "delete"){
        this.nodeService.delete(this.deleteIndex).then((res:any)=>{
          UIkit.modal(_elementId).hide();
          this.loading = false;
          this.loadNode();
        }).catch((err:any)=>{
          UIkit.modal(_elementId).hide();
          this.loading = false;
          UIkit.notification({
            message: err,
            status: 'warning',
            timeout: 1000
          });
        })
        UIkit.modal(_elementId).hide();
        this.loading = false;
      }
    }else{
      UIkit.modal(_elementId).hide();
    }
  }

  onHeaderClick(event){
    let _elementId = "#"+this.confirmModal.elementId;
    if(event == 'back'){
      UIkit.modal(_elementId).$destroy(true);
      this.router.navigate(['dealer', 'information', this.dealerId]);
    }
  }

}

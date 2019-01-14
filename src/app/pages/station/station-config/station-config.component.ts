import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';
import { StationService } from '../services/station.service';
import {TranslateService, TranslationChangeEvent} from '@ngx-translate/core';
declare var UIkit: any;

@Component({
  selector: 'app-station-config',
  templateUrl: './station-config.component.html',
  styleUrls: ['./station-config.component.scss']
})
export class StationConfigComponent implements OnInit {

  dealerId = '';
  loading = false;

  station = {
    name:"",
    detail:"",
  }

  pageController = {
    itemPerPage: 10,
    itemNumber: 0,
    pageNumber: 0,
    pageIndex: 1,
    pageArray: [],
  };

  stations = [];

  confirmModal = {
    elementId:"station-config-confirm-modal",
    detail:"",
    state:"",
  }

  //mockup
  deleteIndex = 0;
  //moclup

  constructor(private router : Router, private activeRoute: ActivatedRoute, private stationService: StationService, private translate: TranslateService) {
    this.dealerId = activeRoute.snapshot.params['dealerId'];
  }

  ngOnInit() {
    this.loadStation();
  }

  loadStation(){
    this.loading = true;
    this.stationService.list(this.dealerId, (this.pageController.pageIndex - 1) * this.pageController.itemPerPage, this.pageController.itemPerPage).then((res:any)=>{
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
      this.stations = res.data.station;
      this.loading = false;
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
    this.loadStation();
  }

  createStation(){
    let _elementId = "#"+this.confirmModal.elementId;
    if(this.station.name !=''){
      this.confirmModal.detail=this.translate.instant("Do you confirm to create")+ " "+ this.station.name +" "+ this.translate.instant("station") + "?";
      this.confirmModal.state="create";
      UIkit.modal(_elementId).show();
    } else {
      UIkit.notification({
        message: this.translate.instant('Station name cannot emtry!!!'),
        status: 'warning',
        timeout: 1000
      });
    }
  }

  editStation(stationId){
    let _elementId = "#"+this.confirmModal.elementId;
    UIkit.modal(_elementId).$destroy(true);
    this.router.navigate(['station', 'edit', this.dealerId, stationId]);
  }

  deleteStation(id, name){
    let _elementId = "#"+this.confirmModal.elementId;
    this.deleteIndex = id;
    this.confirmModal.detail=this.translate.instant("Do you confirm to delete")+" "+ name +" "+this.translate.instant("station")+"?";
    this.confirmModal.state="delete";
    UIkit.modal(_elementId).show();
  }

  onClickConfirmModal(event){
    let _elementId = "#"+this.confirmModal.elementId;
    if(event){
      if(this.confirmModal.state == "create"){
        this.loading=true;
        this.stationService.create(this.dealerId, this.station).then((res:any)=>{
          this.station.name ='';
          this.station.detail ='';
          UIkit.modal(_elementId).hide();
          this.loading=false;
          this.loadStation();
        }).catch((err:any)=>{
          UIkit.modal(_elementId).hide();
          this.loading=false;
          UIkit.notification({
            message: err,
            status: 'warning',
            timeout: 1000
          })
        })
      }else if(this.confirmModal.state == "delete"){
        this.loading=true;
        this.stationService.delete(this.deleteIndex).then((res:any)=>{
          UIkit.modal(_elementId).hide();
          this.loading=false;
          this.loadStation();
        }).catch((err:any)=>{
          UIkit.modal(_elementId).hide();
          this.loading=false;
          UIkit.notification({
            message: err,
            status: 'warning',
            timeout: 1000
          })
        })
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

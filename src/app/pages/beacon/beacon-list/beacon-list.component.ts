import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';
import { BeaconService } from '../services/beacon.service';
import {TranslateService, TranslationChangeEvent} from '@ngx-translate/core';
declare var UIkit: any;

@Component({
  selector: 'app-beacon-list',
  templateUrl: './beacon-list.component.html',
  styleUrls: ['./beacon-list.component.scss']
})
export class BeaconListComponent implements OnInit {

  dealerId = '';
  loading = false;

  confirmModal = {
    elementId:"beacon-list-confirm-modal",
    detail:this.translate.instant("Do you confirm to update information?"),
    state:"",
  }

  pageController = {
    itemPerPage: 10,
    itemNumber: 0,
    pageNumber: 0,
    pageIndex: 1,
    pageArray: [],
  };

  beacon = {
    name:"",
    uuid:"",
  }

  beacons = [];

//mockup
deleteIndex=0;
//mockup

  constructor(private router : Router, private activeRoute: ActivatedRoute, private beaconService: BeaconService, private translate: TranslateService) {
    this.dealerId = activeRoute.snapshot.params['dealerId'];
  }

  ngOnInit() {
    this.loadBeacon();
  }

  loadBeacon(){
    this.loading = true;
    this.beaconService.list(this.dealerId, (this.pageController.pageIndex - 1) * this.pageController.itemPerPage, this.pageController.itemPerPage).then((res:any)=>{
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
      this.beacons = res.data.beacon;
      this.loading = false;
    }).catch((err:any)=>{
      UIkit.notification({
        message: this.translate.instant('Cannot load Beacon'),
        status: 'warning',
        timeout: 1000
      });
      this.loading = false;
    });
  }

  changePageonClick(option, index){
    if(option){
      this.pageController.pageIndex = index;
    }else{
      this.pageController.pageIndex += index;
    }
    this.loadBeacon();
  }
  registerBeacon(){
    let _elementId = "#"+this.confirmModal.elementId;
    UIkit.modal(_elementId).$destroy(true);
    this.router.navigate(['beacon', 'register', this.dealerId]);
  }
  // registerBeacon(){
  //   let _elementId = "#"+this.confirmModal.elementId;
  //   if(this.beacon.name !='' && this.beacon.uuid  !=''){
  //     this.confirmModal.detail=this.translate.instant("Do you confirm to register")+" " + this.beacon.name + " "+this.translate.instant("beacon")+"?";
  //     this.confirmModal.state="add";
  //     UIkit.modal(_elementId).show();
  //   } else {
  //     if(this.beacon.name ==''){
  //       UIkit.notification({
  //         message: this.translate.instant('name')+" "+this.translate.instant('cannot emtry!!!'),
  //         status: 'warning',
  //         timeout: 1000
  //       });
  //     }
  //     if(this.beacon.uuid ==''){
  //       UIkit.notification({
  //         message: this.translate.instant('uuid')+" "+this.translate.instant('cannot emtry!!!'),
  //         status: 'warning',
  //         timeout: 1000
  //       });
  //     }
  //   }
  // }

  editBeacon(beaconId){
    let _elementId = "#"+this.confirmModal.elementId;
    UIkit.modal(_elementId).$destroy(true);
    this.router.navigate(['beacon', 'edit', this.dealerId, beaconId]);
  }
  
  deleteBeacon(index ,name){
    let _elementId = "#"+this.confirmModal.elementId;
    this.deleteIndex = index;
    this.confirmModal.detail=this.translate.instant("Do you confirm to delete")+" "+name+" "+this.translate.instant("beacon")+"?";
    this.confirmModal.state="delete";
    UIkit.modal(_elementId).show();
  }

  onClickConfirmModal(event){
    let _elementId = "#"+this.confirmModal.elementId;
    
    if(event){
      this.loading = true;
      if(this.confirmModal.state == "add"){
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
        this.beaconService.create(this.dealerId, this.beacon).then((res:any)=>{
          this.beacon.name ='';
        this.beacon.uuid ='';
          UIkit.modal(_elementId).hide();
          this.loading = false;
          this.loadBeacon();
        }).catch((err:any)=>{
          UIkit.modal(_elementId).hide();
          this.loading = false;
          UIkit.notification({
            message: this.translate.instant('Cannot create Beacon!!!'),
            status: 'warning',
            timeout: 1000
          });
        })
      } else if(this.confirmModal.state == "delete"){
        this.beaconService.delete(this.deleteIndex).then((res:any)=>{
          UIkit.modal(_elementId).hide();
          this.loading = false;
          this.loadBeacon();
        }).catch((err:any)=>{
          UIkit.modal(_elementId).hide();
          this.loading = false;
          UIkit.notification({
            message: this.translate.instant('Cannot delete Beacon!!!'),
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
      this.router.navigate(['menu']);
    }
  }
}

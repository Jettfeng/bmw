import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CarService } from '../services/car.service';
import {TranslateService, TranslationChangeEvent} from '@ngx-translate/core';
declare var UIkit: any;

@Component({
  selector: 'app-car-register',
  templateUrl: './car-register.component.html',
  styleUrls: ['./car-register.component.scss']
})
export class CarRegisterComponent implements OnInit {
  
  confirmModal = {
    elementId:"car-edit-confirm-modal",
    detail:this.translate.instant("Do you confirm to create information?"),
    state:"",
  }
  dealerId = '';
  loading = false;
   def_beacon_name='*'+this.translate.instant("Select Beacon");
  beacons = [];
  car = {
    license_plate:'',
    brand:'',
    model:'',
    color:'',
    beacon_name:('*'+this.translate.instant("Select Beacon")),
    dealer_id: ','
  };

  constructor(private router : Router, private activeRoute : ActivatedRoute, private carService: CarService, private translate: TranslateService) { 
    this.dealerId = activeRoute.snapshot.params['dealerId'];
    this.car.dealer_id = activeRoute.snapshot.params['dealerId'];
   
  }
  ngOnInit() {
    this.loadCar()
  }
  loadCar(){
    console.log(this.car);
    this.loading = true;
    this.carService.beaconlist(this.dealerId,0,1000)
      .then((res:any)=>{
        console.log(res.data.beacon);
        let de_car={
          　　name:this.car.beacon_name
          };
        
        this.beacons = res.data.beacon;
        this.beacons.unshift(de_car);
     //   new Object(){name:this.translate.instant("Select Beacon")
      //  this.beacons.shift(},0)//serviceagent1
        this.loading = false;
      })
      .catch((err:any)=>{
        UIkit.notification({
          message: this.translate.instant('Cannot load Beacon'),
          status: 'warning',
          timeout: 1000
        });
        this.loading = false;
      });
    // this.loading=true;
    // this.carService.beaconlist(this.dealerId,0,1000)
    // .then((res:any)=>{
    //   this.beacons = res.data.beacon;
    // })
    // .catch((err:any)=>{
    //   UIkit.notification({
    //     message: this.translate.instant('Cannot load Beacon'),
    //     status: 'warning',
    //     timeout: 1000
    //   });
    // });
    // this.carService.get(this.carId).then((res:any)=>{
    //   this.car = res.data.car;
    //   this.car.beacon_name = res.data.car.beacon.name;
    //   this.car.beacon = [];
    //   this.car.timeline = [];
    //   this.loading=false;
    // }).catch((err:any)=>{
    //   this.loading=false;
    //   UIkit.notification({
    //     message: this.translate.instant('Cannot load Car'),
    //     status: 'warning',
    //     timeout: 1000
    //   })
    // })
  }

  registerCar(){
    let _elementId = "#"+this.confirmModal.elementId;
    if(this.car.license_plate == ""){
      UIkit.modal(_elementId).hide();
      this.loading = false;
      UIkit.notification({
        message: this.translate.instant("license plate cannot empty"),
        status: 'warning',
        timeout: 1000
      });
      return;
    }
     
    if(this.car.beacon_name == "" || this.car.beacon_name==this.def_beacon_name){
      UIkit.modal(_elementId).hide();
      this.loading = false;
      UIkit.notification({
        message: this.translate.instant("Beacon Name cannot empty"),
        status: 'warning',
        timeout: 1000
      });
      return;
    }
    this.confirmModal.detail = this.translate.instant("Do you confirm to create car information?");
    UIkit.modal(_elementId).show();
  }

  cancelCar(){
    let _elementId = "#"+this.confirmModal.elementId;
    UIkit.modal(_elementId).$destroy(true);
    this.router.navigate(['car', 'list', this.dealerId]);
  }

  modalConfirm(){
    UIkit.util.on('#modal-confirm', 'hidden', function () {
      UIkit.modal('#modal-confirm').$destroy(true);
    });
    UIkit.modal('#modal-confirm').hide();
    this.router.navigate(['car', 'list', this.dealerId]);
  }

  modalCancel(){
    UIkit.modal('#modal-confirm').hide();
  }
  onClickConfirmModal(event){
    let _elementId = "#"+this.confirmModal.elementId;
    if(event){
      this.loading = true;

      this.carService.create(this.car).then((res:any)=>{
        console.log('=============');
        console.log(res);
        UIkit.modal(_elementId).hide();
        this.loading = false;
        UIkit.util.on(_elementId, 'hidden', function () {
          UIkit.modal(_elementId).$destroy(true);
        });
        UIkit.modal(_elementId).hide();
        this.router.navigate(['car', 'list', this.dealerId]);
      }).catch((err:any)=>{
        UIkit.modal(_elementId).hide();
        this.loading = false;
        UIkit.notification({
          message: err,
          status: 'warning',
          timeout: 1000
        });
      })
     
    }else{
      UIkit.modal(_elementId).hide();
    }
  }

  // onClickConfirmModal(event){
  //   let _elementId = "#"+this.confirmModal.elementId;
  //   if(event){
  //    this.loading = true;
  //     if(this.confirmModal.state == "add"){
  //       this.carService.create(this.car).then((res:any)=>{
  //         this.car.license_plate ='';
  //         this.car.brand ='';
  //         this.car.model ='';
  //         this.car.color ='';
  //         this.car.beacon_name ='';
  //         UIkit.modal(_elementId).hide();
  //         this.loading = false;
  //         this.loadCar();
  //       }).catch((err:any)=>{
  //         UIkit.modal(_elementId).hide();
  //         this.loading = false;
  //         UIkit.notification({
  //           message: err,
  //           status: 'warning',
  //           timeout: 1000
  //         });
  //       })
  //     }
  //   }else{
  //     UIkit.modal(_elementId).hide();
  //   }
  // }

}

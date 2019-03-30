import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CarService } from '../services/car.service';
import {TranslateService, TranslationChangeEvent} from '@ngx-translate/core';
declare var UIkit: any;

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.scss']
})
export class CarEditComponent implements OnInit {

  dealerId = '';
  carId = '';
  loading = false;

  confirmModal = {
    elementId:"car-edit-confirm-modal",
    detail:this.translate.instant("Do you confirm to update information?"),
    state:"",
  }
  def_beacon_name='*'+this.translate.instant("Select Beacon");
  car = {
    license_plate: '',
    brand: '',
    model: '',
    color: '',
    beacon_name:('*'+this.translate.instant("Select Beacon")),
    dealer_id:'',
    beacon: [],
    timeline: [],
    username:''
  }
  beacons = [];
  role = {
    admin: false,
    supervisor: false,
    technician: false,
    analyst: false,
  }
  constructor(private router : Router, private activeRoute : ActivatedRoute, private carService: CarService, private translate: TranslateService) { 
    this.dealerId = activeRoute.snapshot.params['dealerId'];
    this.car.dealer_id = activeRoute.snapshot.params['dealerId'];
    this.carId = activeRoute.snapshot.params['carId'];
  }

  ngOnInit() {
    let userType = localStorage.getItem('userType');
    this.role[userType] = true;
    this.loadCar();
  }

  loadCar(){
    this.loading=true;
    this.carService.beaconlist(this.dealerId,0,1000)
    .then((res:any)=>{
      let de_car={
        　　name:this.car.beacon_name
        };
      
      this.beacons = res.data.beacon;
     // this.beacons.unshift(de_car);
      console.log('aaa');
        console.log(this.beacons);
    })
    .catch((err:any)=>{
      UIkit.notification({
        message: this.translate.instant('Cannot load Beacon'),
        status: 'warning',
        timeout: 1000
      });
    });
    this.carService.get(this.carId).then((res:any)=>{
      this.car = res.data.car;
      this.car.beacon_name = res.data.car.beacon.name;
      this.car.beacon = [];
      this.car.timeline = [];
      this.loading=false;
      this.car.username=localStorage.getItem('userName');
    }).catch((err:any)=>{
      this.loading=false;
      UIkit.notification({
        message: this.translate.instant('Cannot load Car'),
        status: 'warning',
        timeout: 1000
      })
    })
  }

  editCar(){

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
    if(this.car.brand == ""){
      UIkit.modal(_elementId).hide();
      this.loading = false;
      UIkit.notification({
        message: this.translate.instant("brand cannot empty"),
        status: 'warning',
        timeout: 1000
      });
      return;
    }
    if(this.car.model == ""){
      UIkit.modal(_elementId).hide();
      this.loading = false;
      UIkit.notification({
        message: this.translate.instant("Model cannot empty"),
        status: 'warning',
        timeout: 1000
      });
      return;
    }
    if(this.car.color == ""){
      UIkit.modal(_elementId).hide();
      this.loading = false;
      UIkit.notification({
        message: this.translate.instant("Color cannot empty"),
        status: 'warning',
        timeout: 1000
      });
      return;
    }
    if(this.car.beacon_name == ""){
      UIkit.modal(_elementId).hide();
      this.loading = false;
      UIkit.notification({
        message: this.translate.instant("Beacon Name cannot empty"),
        status: 'warning',
        timeout: 1000
      });
      return;
    }
    this.confirmModal.detail = this.translate.instant("Do you confirm to update car information?");
    UIkit.modal(_elementId).show();
  }

  cancelCar(){
    let _elementId = "#"+this.confirmModal.elementId;
    UIkit.modal(_elementId).$destroy(true);
    this.router.navigate(['car', 'list', this.dealerId]);
  }

  onClickConfirmModal(event){
    let _elementId = "#"+this.confirmModal.elementId;
    if(event){
      this.loading = true;

      this.carService.edit(this.car).then((res:any)=>{
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


}

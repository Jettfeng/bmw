import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CarService } from '../services/car.service';
import {TranslateService, TranslationChangeEvent} from '@ngx-translate/core';
declare var UIkit: any;

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  dealerId = '';
  loading = false;

  confirmModal = {
    elementId:"car-list-confirm-modal",
    detail:"",
    state:"",
  }

  pageController = {
    itemPerPage: 10,
    itemNumber: 0,
    pageNumber: 0,
    pageIndex: 1,
    pageArray: [],
  };

  car = {
    license_plate:'',
    brand:'',
    model:'',
    color:'',
    beacon_name:'',
    dealer_id: ','
  };

  cars = [];
  beacons = [];

  modalDeregister = {
    id:'',
    title:'',
    beaconName: '',
    form:{
      beaconId:'',
    }
  }

  constructor(private router : Router, private activeRoute : ActivatedRoute, private carService: CarService, private translate: TranslateService) { 
    this.dealerId = activeRoute.snapshot.params['dealerId'];
    this.car.dealer_id = activeRoute.snapshot.params['dealerId'];
  }

  ngOnInit() {
    this.loadCar();
  }

  loadCar(){
    this.loading = true;
    this.carService.beaconlist(this.dealerId,0,1000)
      .then((res:any)=>{
        this.beacons = res.data.beacon;
      })
      .catch((err:any)=>{
        UIkit.notification({
          message: this.translate.instant('Cannot load Beacon'),
          status: 'warning',
          timeout: 1000
        });
      });

    this.carService.list(this.dealerId, (this.pageController.pageIndex - 1) * this.pageController.itemPerPage, this.pageController.itemPerPage)
      .then((res:any)=>{
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
        this.cars = res.data.car;
        this.loading = false;

      }).catch((err:any)=>{
        UIkit.notification({
          message: this.translate.instant('Cannot load Car'),
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
    this.loadCar();
  }

  registerCar(){
    let _elementId = "#"+this.confirmModal.elementId;
    if(this.car.license_plate !='' && this.car.brand  !=''&& this.car.model  !=''&& this.car.color  !=''&& this.car.beacon_name  !=''){
      this.confirmModal.detail=this.translate.instant("Do you confirm to register")+" " + this.car.license_plate + " "+this.translate.instant("car")+"?";
      this.confirmModal.state="add";
      UIkit.modal(_elementId).show();
    } else { 
      UIkit.notification({
      message: this.translate.instant('* Cannot emptry!!!'),
      status: 'warning',
      timeout: 1000
    });
    }
  }

  editCar(carId){
    let _elementId = "#"+this.confirmModal.elementId;
    UIkit.modal('#modal-deregister').$destroy(true);
    UIkit.modal(_elementId).$destroy(true);
    this.router.navigate(['car', 'edit', this.dealerId, carId]);
  }

  deregisterCar(id, licensePlate, beaconName){
    this.modalDeregister.id = id;
    this.modalDeregister.title = licensePlate;
    this.modalDeregister.beaconName = beaconName;
    UIkit.modal('#modal-deregister').show();
  }

  deregister(){
    if(this.modalDeregister.form.beaconId ==  this.modalDeregister.beaconName){
      this.loading = true;
      this.carService.deregister(this.modalDeregister.id).then((res:any)=>{
        UIkit.modal('#modal-deregister').hide();
        this.loading = false;
        this.loadCar();
      }).catch((err:any)=>{
        UIkit.modal('#modal-deregister').hide();
        this.loading = false;
        UIkit.notification({
          message: this.translate.instant('Cannot deregister Car!!!'),
          status: 'warning',
          timeout: 1000
        });
      })
    }else{
      this.modalDeregister.form.beaconId = "";
      UIkit.modal('#modal-deregister').hide(); 
      UIkit.notification({
        message: this.translate.instant('Beacon name not match'),
        status: 'warning',
        timeout: 1000
      });
    }
  }

  cancelDeregister(){
    UIkit.modal('#modal-deregister').hide();

  }

  onHeaderClick(event){
    let _elementId = "#"+this.confirmModal.elementId;
    if(event == 'back'){
      UIkit.modal('#modal-deregister').$destroy(true);
      UIkit.modal(_elementId).$destroy(true);
      this.router.navigate(['menu']);
    }
  }

  onClickConfirmModal(event){
    let _elementId = "#"+this.confirmModal.elementId;
    if(event){
     this.loading = true;
      if(this.confirmModal.state == "add"){
        this.carService.create(this.car).then((res:any)=>{
          this.car.license_plate ='';
          this.car.brand ='';
          this.car.model ='';
          this.car.color ='';
          this.car.beacon_name ='';
          UIkit.modal(_elementId).hide();
          this.loading = false;
          this.loadCar();
        }).catch((err:any)=>{
          UIkit.modal(_elementId).hide();
          this.loading = false;
          UIkit.notification({
            message: err,
            status: 'warning',
            timeout: 1000
          });
        })
      }
    }else{
      UIkit.modal(_elementId).hide();
    }
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DashboardService } from '../services/dashboard.service';import { interval } from 'rxjs';
import {TranslateService, TranslationChangeEvent} from '@ngx-translate/core';
declare var UIkit: any;

@Component({
  selector: 'app-car-dashboard',
  templateUrl: './car-dashboard.component.html',
  styleUrls: ['./car-dashboard.component.scss']
})
export class CarDashboardComponent implements OnInit, OnDestroy {

  dealerId = '';
  loading = false;
  car = {
    currentStatus: false,
    license_plate: '',
    brand: '',
    model:'',
    color: '',
    currentStation: '',
    stationTime: 0,
    totalTime: 0,
  };
  cars = [];
  role = {
    admin: false,
    supervisor: false,
    technician: false,
    analyst: false,
  }
  // secondsCounter = interval(5000);

  interval = setInterval(() => {
   // this.refreshCar()
  }, 5000);
  
  constructor(private router : Router, private activeRoute : ActivatedRoute, private dashboardService: DashboardService, private translate: TranslateService) { 
    this.dealerId = activeRoute.snapshot.params['dealerId'];
  }

  ngOnInit() {
    let userType = localStorage.getItem('userType');
    this.role[userType] = true;
    this.loadCar();
  }

  ngOnDestroy(){
    clearInterval(this.interval);
  }

  loadCar(){
    this.loading = true;
    this.dashboardService.list(this.dealerId).then((res:any)=>{
      let carTmp =[];
      res.data.car.forEach(item => {
        if(item.dashboard.length > 0) {
          /// find current station
          if(item.dashboard[0].station_id != 0){
            item.currentStation = item.dashboard[0].station.name;
          }else{
            item.currentStation = "-";
          }
          
          /// find current station time
          item.stationTime = 0;
          item.dashboard.forEach(element => {
            if(item.dashboard[0].station_id == element.station_id){
              item.stationTime += element.def_time;
            }
          });

         /// find current total time
          let maxStationTime = new Date(res.data.time).getTime(); 
          let registerTime = new Date(item.dashboard[item.dashboard.length-1].arrival_at).getTime() ; 
          item.totalTime = Math.floor((maxStationTime- registerTime)/60000);

          /// find status notificaiton
          item.currentStatus = false;
          if(item.notification.length > 0){
            item.currentStatus = true;
          }

        }else{
          item.currentStation = "-";
          item.stationTime= 0;
          item.totalTime = 0;
          item.currentStatus = false;
        }
        carTmp.push(item);
      });
      this.cars = carTmp;
      this.loading = false;
    }).catch((err:any)=>{
      console.log(err);
      UIkit.notification({
        message: this.translate.instant('Cannot load Car'),
        status: 'warning',
        timeout: 1000
      });
      this.loading = false;
    });
  }

  refreshCar(){
    this.dashboardService.list(this.dealerId).then((res:any)=>{
      let carTmp =[];
      res.data.car.forEach(item => {
        if(item.dashboard.length > 0) {
          /// find current station
          if(item.dashboard[0].station_id != 0){
            item.currentStation = item.dashboard[0].station.name;
          }else{
            item.currentStation = "-";
          }
          
          /// find current station time
          item.stationTime = 0;
          item.dashboard.forEach(element => {
            if(item.dashboard[0].station_id == element.station_id){
              item.stationTime += element.def_time;
            }
          });

         /// find current total time
          let maxStationTime = new Date(res.data.time).getTime(); 
          let registerTime = new Date(item.dashboard[item.dashboard.length-1].arrival_at).getTime() ; 
          item.totalTime = Math.floor((maxStationTime- registerTime)/60000);

          /// find status notificaiton
          item.currentStatus = false;
          if(item.notification.length > 0){
            item.currentStatus = true;
          }

        }else{
          item.currentStation = "-";
          item.stationTime= 0;
          item.totalTime = 0;
          item.currentStatus = false;
        }
        carTmp.push(item);
      });
      this.cars = carTmp;
    }).catch((err:any)=>{
      UIkit.notification({
        message: this.translate.instant('Cannot load Car'),
        status: 'warning',
        timeout: 1000
      });
    });
  }

  configNotification(){
    clearInterval(this.interval);
    this.router.navigate(['dashboard', 'config', 'notification', this.dealerId]);
  }

  timeline(carId){
    clearInterval(this.interval);
    this.router.navigate(['dashboard', 'timeline', this.dealerId, carId]);
  }

  onHeaderClick(event){
    clearInterval(this.interval);
    if(event == 'back'){
      this.router.navigate(['menu']);
    }
  }
}

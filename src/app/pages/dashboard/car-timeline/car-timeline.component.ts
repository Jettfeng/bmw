import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DashboardService } from '../services/dashboard.service';
declare var UIkit: any;

@Component({
  selector: 'app-car-timeline',
  templateUrl: './car-timeline.component.html',
  styleUrls: ['./car-timeline.component.scss']
})
export class CarTimelineComponent implements OnInit {

  dealerId = '';
  carId = '';
  loading = false;

  car = {
    license_plate: '',
    brand: '',
    model:'',
    color: '',
    status:[],
    timeline:[],
  };

  constructor(private router : Router, private activeRoute : ActivatedRoute, private dashboardService: DashboardService) { 
    this.carId = activeRoute.snapshot.params['carId'];
    this.dealerId = activeRoute.snapshot.params['dealerId'];
  }

  ngOnInit() {
    this.loadCar();
  }

  loadCar(){
    this.loading = true;
    this.dashboardService.timeline(this.carId).then((res:any)=>{
      this.car = res.data.car[0];
      let tmpTimeline = res.data.car[0].dashboard;
      tmpTimeline.forEach((cartime:any) => {
        ///calcurate time
       cartime.stationTime = cartime.def_time;

        /// find station status
        cartime.status = "";
        res.data.car[0].notification.forEach((noti:any) => {
          if(noti.station_notification_config_id != 0){
            if(cartime.station != null){
              if(noti.station_notification.station_id == cartime.station.id){
                cartime.status = noti.station_notification.alert_message;
              }
            }
          }
        });
      });
      this.car.timeline = tmpTimeline;

      /// find dealer status
      let tmpStatus = [];
      res.data.car[0].notification.forEach((noti:any) => {
        if(noti.dealer_notification_config_id != 0){
          tmpStatus.push(noti.dealer_notification.name);
        }
      });
      this.car.status = tmpStatus;
      this.loading = false;
    }).catch((err:any)=>{
      UIkit.notification({
        message: err,
        status: 'warning',
        timeout: 1000
      });
      this.loading = false;
    });
  }

  onHeaderClick(event){
    if(event == 'back'){
      this.router.navigate(['dashboard', 'car', this.dealerId]);
    }
  }
}

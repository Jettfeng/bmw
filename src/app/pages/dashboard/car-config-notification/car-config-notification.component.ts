import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DashboardService } from '../services/dashboard.service';

declare var UIkit: any;

@Component({
  selector: 'app-car-config-notification',
  templateUrl: './car-config-notification.component.html',
  styleUrls: ['./car-config-notification.component.scss']
})
export class CarConfigNotificationComponent implements OnInit {

  dealerId = '';
  loading = false;

  confirmModal = {
    elementId:"dashboard-config-edit-confirm-modal",
    detail:"Do you confirm to update notification condition?",
    state:"",
  }

  form = {
    dealer_noti_config:[],
    station_noti_config:[],
  }
  role = {
    admin: false,
    supervisor: false,
    technician: false,
    analyst: false,
  }
  constructor(private router : Router, private activeRoute : ActivatedRoute, private dashboardService: DashboardService) { 
    this.dealerId = activeRoute.snapshot.params['dealerId'];
  }
  

  ngOnInit() {
    let userType = localStorage.getItem('userType');
    this.role[userType] = true;
    this.loadNotification();
  }

  loadNotification(){
    this.loading = true;
    this.dashboardService.notificationList(this.dealerId).then((res:any)=>{
      this.form.dealer_noti_config = res.data.dealer_noti_config;
      this.form.station_noti_config = res.data.station_noti_config;
      this.loading = false;
    }).catch((err:any)=>{
      this.loading = false;
    });
  }


  save(){
    let _elementId = "#"+this.confirmModal.elementId;
    UIkit.modal(_elementId).show();
  }

  cancel(){
    let _elementId = "#"+this.confirmModal.elementId;
    UIkit.modal(_elementId).$destroy(true);
    this.router.navigate(['dashboard', 'car', this.dealerId]);
  }

  onClickConfirmModal(event){
    let _elementId = "#"+this.confirmModal.elementId;
    if(event){
      this.loading = true;
      this.dashboardService.notificationEdit(this.form).then((res:any)=>{
        UIkit.util.on(_elementId, 'hidden', function () {
          UIkit.modal(_elementId).$destroy(true);
        });
        UIkit.modal(_elementId).hide();
        this.loading = false;
        this.router.navigate(['dashboard', 'car', this.dealerId]);
      }).catch((err:any)=>{
        this.loading = false;
        UIkit.modal(_elementId).hide();
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

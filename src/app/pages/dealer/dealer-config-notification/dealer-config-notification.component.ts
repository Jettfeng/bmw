import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DealerService } from '../services/dealer.service';
import {TranslateService, TranslationChangeEvent} from '@ngx-translate/core';
declare var UIkit: any;

@Component({
  selector: 'app-dealer-config-notification',
  templateUrl: './dealer-config-notification.component.html',
  styleUrls: ['./dealer-config-notification.component.scss']
})
export class DealerConfigNotificationComponent implements OnInit {

  dealerId = '';
  loading = false;

  confirmModal = {
    elementId:"notification-config-edit-confirm-modal",
    detail:this.translate.instant("Do you confirm to update notification condition?"),
    state:"",
  }

  form = {
    dealer_noti_config:[],
    station_noti_config:[],
  }

  constructor(private router : Router, private activeRoute : ActivatedRoute, private dealerService: DealerService, private translate: TranslateService) { 
    this.dealerId = activeRoute.snapshot.params['dealerId'];
  }

  ngOnInit() {
    this.loadNotification();
  }

  loadNotification(){
    this.loading = true;
    this.dealerService.notificationList(this.dealerId).then((res:any)=>{
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
    this.router.navigate(['dealer', 'information', this.dealerId]);
  }

  onClickConfirmModal(event){
    let _elementId = "#"+this.confirmModal.elementId;
    if(event){
      this.loading = true;
      this.dealerService.notificationEdit(this.form).then((res:any)=>{
        UIkit.util.on(_elementId, 'hidden', function () {
          UIkit.modal(_elementId).$destroy(true);
        });
        UIkit.modal(_elementId).hide();
        this.loading = false;
        this.router.navigate(['dealer', 'information', this.dealerId]);
      }).catch((err:any)=>{
        this.loading = false;
        UIkit.modal(_elementId).hide();
        UIkit.notification({
          message: this.translate.instant('Cannot edit Notification'),
          status: 'warning',
          timeout: 1000
        })
      })


    }else{
      UIkit.modal(_elementId).hide();
    }
  }
}

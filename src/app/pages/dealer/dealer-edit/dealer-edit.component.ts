import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DealerService } from '../services/dealer.service';
import {TranslateService, TranslationChangeEvent} from '@ngx-translate/core';
declare var UIkit: any;

@Component({
  selector: 'app-dealer-edit',
  templateUrl: './dealer-edit.component.html',
  styleUrls: ['./dealer-edit.component.scss']
})
export class DealerEditComponent implements OnInit {

  dealerId = '';
  loading = false;

  confirmModal = {
    elementId:"dealer-edit-confirm-modal",
    detail:this.translate.instant("Do you confirm to update information?"),
    state:"",
  }
  
  form = {
    name: '',
    address: '',
    street: '',
    state: '',
    city: '',
    country: '',
    zipcode: '',
    contact_name:'',
    contact_position:'',
    contact_email:'',
    contact_tel:'',
  }

  alert = {
    show: false,
    message: "",
  }

  constructor(private router : Router, private activeRoute : ActivatedRoute, private dealerService: DealerService, private translate: TranslateService) { 
    this.dealerId = activeRoute.snapshot.params['dealerId'];
  }

  ngOnInit() {
    this.loadDealer();
  }

  loadDealer(){
    this.loading = true;
    this.dealerService.get(this.dealerId).then((res:any)=>{
      this.form = res.data.dealer;
      this.loading = false;
    }).catch((err:any)=>{
      this.loading = false;
    });
  }

  edit(){
    if(this.form.name !=''){
		let _elementId = "#"+this.confirmModal.elementId;
		UIkit.modal(_elementId).show();
    } else {
      UIkit.notification({
        message: this.translate.instant('Dealer name cannot emtry!!!'),
        status: 'warning',
        timeout: 1000
      });
	}
  }

  cancel(){
    let _elementId = "#"+this.confirmModal.elementId;
    UIkit.modal(_elementId).$destroy(true);
    this.router.navigate(['dealer', 'information', this.dealerId]);
  }

  onClickConfirmModal(event){
    let _elementId = "#"+this.confirmModal.elementId;
    if(event){
      this.alert.show = false;
      this.loading = true;
      this.dealerService.edit(this.form).then((res:any)=>{
        UIkit.util.on(_elementId, 'hidden', function () {
          UIkit.modal(_elementId).$destroy(true);
        });
        UIkit.modal(_elementId).hide();
        this.loading = false;
        this.router.navigate(['dealer', 'information', this.dealerId]);
      }).catch((err:any)=>{
        this.loading = false;
        UIkit.modal(_elementId).hide();
        this.alert.show = true;
        this.alert.message = err;
      })
    }else{
      UIkit.modal(_elementId).hide();
    }
  }

}

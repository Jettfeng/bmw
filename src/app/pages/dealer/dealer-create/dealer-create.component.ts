import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DealerService } from '../services/dealer.service';
import {TranslateService, TranslationChangeEvent} from '@ngx-translate/core';
declare var UIkit: any;

@Component({
  selector: 'app-dealer-create',
  templateUrl: './dealer-create.component.html',
  styleUrls: ['./dealer-create.component.scss']
})
export class DealerCreateComponent implements OnInit {

  constructor(private router : Router, private dealerService : DealerService, private translate: TranslateService) { }

  loading = false;

  elementId = {
    confirmModal:"dealer-create-confirm-modal",
  }

  confirmModal = {
    elementId:"dealer-create-confirm-modal",
    detail:this.translate.instant("Do you confirm to create new Dealer?"),
    state:"",
  }

  alert = {
    show: false,
    message: "",
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

  ngOnInit() {
  }

  create(){
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
    this.router.navigate(['dealer', 'list']);
  }

  onClickConfirmModal(event){
    let _elementId = "#"+this.confirmModal.elementId;
    if(event){
      this.alert.show = false;
      this.loading = true;
      this.dealerService.create(this.form).then((res:any)=>{
        UIkit.util.on(_elementId, 'hidden', function () {
          UIkit.modal(_elementId).$destroy(true);
        });
        UIkit.modal(_elementId).hide();
        this.loading = false;
        this.router.navigate(['dealer', 'list']);
      }).catch((err:any)=>{
        this.loading = false;
        UIkit.modal(_elementId).hide();
        console.log(err);
        this.alert.show = true;
        this.alert.message = err;
      })
    }else{
      UIkit.modal(_elementId).hide();
    }
  }

}

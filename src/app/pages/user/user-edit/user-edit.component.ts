import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import {TranslateService, TranslationChangeEvent} from '@ngx-translate/core';
declare var UIkit: any;

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  
  dealerId = '';
  userId = '';
  loading = false;

  confirmModal = {
    elementId:"user-edit-confirm-modal",
    detail:this.translate.instant("Do you confirm to update User?"),
    state:"",
  }

  user = {
    id: '',
    passwordReply: '',
    username: '',
    fullname: '',
    password: '',
    user_role_id: '',
    email: '',
    tel: '',
    dealer_id: '',
  }

  constructor(private router : Router, private activeRoute : ActivatedRoute, private userService: UserService, private translate: TranslateService) { 
    this.userId = activeRoute.snapshot.params['userId'];
    this.dealerId = activeRoute.snapshot.params['dealerId'];
  }

  ngOnInit() {
    this.loadUser();
  }

  loadUser(){
    this.userService.get(this.userId).then((res:any)=>{
      this.user = res.data.user;
    }).catch((err:any)=>{
      UIkit.notification({
        message: this.translate.instant('Cannot load Profile'),
        status: 'warning',
        timeout: 1000
      })
    })
  }

  editUser(){
    let _elementId = "#"+this.confirmModal.elementId;
    if(this.user.password == ""){
      UIkit.modal(_elementId).show();
    }else{
      if(this.user.password == this.user.passwordReply){
        UIkit.modal(_elementId).show();
      }else{
        UIkit.notification({
          message: this.translate.instant('password and re-password not match'),
          status: 'warning',
          timeout: 1000
        })
      }
    }
  }

  cancelUser(){
    let _elementId = "#"+this.confirmModal.elementId;
    UIkit.modal(_elementId).$destroy(true);
    this.router.navigate(['user', 'list', this.dealerId]);
  }

  onClickConfirmModal(event){
    let _elementId = "#"+this.confirmModal.elementId;
    if(event){
      this.loading=true;
      this.userService.edit(this.user).then((res:any)=>{
        this.loading=false;
        UIkit.util.on(_elementId, 'hidden', function () {
          UIkit.modal(_elementId).$destroy(true);
        });
        UIkit.modal(_elementId).hide();
        this.router.navigate(['user', 'list', this.dealerId]);
      }).catch((err:any)=>{
        UIkit.modal(_elementId).hide();
        this.loading=false;
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

  onHeaderClick(event){
    if(event == 'back'){
      this.router.navigate(['menu']);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import {TranslateService, TranslationChangeEvent} from '@ngx-translate/core';
declare var UIkit: any;

@Component({
  selector: 'app-profile-pwd',
  templateUrl: './profile-pwd.component.html',
  styleUrls: ['./profile-pwd.component.scss']
})
export class ProfilePwdComponent implements OnInit {

  loading = false;
  userId = '';
  confirmModal = {
    elementId:"profile-pwd-confirm-modal",
    detail:this.translate.instant("Do you confirm to update Profile?"),
    state:"",
  }

  user = {
    id: '',
    username: '',
    fullname: '',
    password: '',
    passwordReply: '',
    position: '',
    email: '',
    user_role_id:'',
    tel: '',
  }

  constructor(private router : Router, private activeRoute : ActivatedRoute, private profileService: ProfileService, private translate: TranslateService) { 
  
    this.userId = localStorage.getItem('userId');
  }

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile(){
    this.profileService.get(this.userId).then((res:any)=>{
      this.user = res.data.user;
    }).catch((err:any)=>{
      UIkit.notification({
        message: this.translate.instant('Cannot load Profile'),
        status: 'warning',
        timeout: 1000
      })
    })
  }

  editProfile(){    
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

  cancelProfile(){
    let _elementId = "#"+this.confirmModal.elementId;
    UIkit.modal(_elementId).$destroy(true);
    this.router.navigate(['profile', 'edit']);// this.router.navigate(['menu']);
  }

  onClickConfirmModal(event){
    let _elementId = "#"+this.confirmModal.elementId;
    if(event){
      this.loading=true;
      this.profileService.edit(this.user).then((res:any)=>{
        this.loading=false;
        UIkit.util.on(_elementId, 'hidden', function () {
          UIkit.modal(_elementId).$destroy(true);
        });
        UIkit.modal(_elementId).hide();
      //  this.router.navigate(['menu']);
        this.router.navigate(['profile', 'edit']);
      }).catch((err:any)=>{
        UIkit.modal(_elementId).hide();
        this.loading=false;
        UIkit.notification({
          message: this.translate.instant('Cannot edit Profile'),
          status: 'warning',
          timeout: 1000
        })
      })

    }else{
      UIkit.modal(_elementId).hide();
    }
  }


}

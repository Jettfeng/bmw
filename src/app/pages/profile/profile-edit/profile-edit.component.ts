import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import {TranslateService, TranslationChangeEvent} from '@ngx-translate/core';
import { AuthenService } from '../../../services/authen/authen.service';
declare var UIkit: any;

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {

  loading = false;
  userId = '';
  confirmModal = {
    elementId:"profile-edit-confirm-modal",
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

  constructor(private router : Router, private activeRoute : ActivatedRoute, private profileService: ProfileService, private translate: TranslateService, private auth : AuthenService) { 
  
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

  pwdprofile(){
    this.router.navigate(['profile', 'pwd']);
  }
  logout(){
    this.auth.userLogout().then((res:any)=>{
      this.router.navigate(['login']);
      //window.location.href = window.location.protocol+"//"+window.location.hostname+":"+window.location.port+"/tracking/#/login";
    }).catch(err=>{
      this.router.navigate(['login']);
    });
    
  }


}

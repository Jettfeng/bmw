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
    user_role_name:""
  }
  language = this.translate.currentLang;
  nextlang = '';
  changemessage = '';
 
  changeLang() {
   
    this.translate.use(this.nextlang);
    this.language = this.nextlang;
     this.langmassage();
    console.log('fb:'+this.nextlang);
  }
  langmassage(){
    if(this.language == 'en'){
      this.nextlang = 'zh';
    }else{
      this.nextlang = 'en';
    }
  } 
  
  constructor(private router : Router, private activeRoute : ActivatedRoute, private profileService: ProfileService, private translate: TranslateService, private auth : AuthenService) { 
  
    this.userId = localStorage.getItem('userId');
    this.langmassage();
  }

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile(){
    this.profileService.get(this.userId).then((res:any)=>{
      this.user = res.data.user;
      
      switch(this.user.user_role_id){
           case 'admin':
            this.user.user_role_name="Admin";
           break;
           case 'supervisor':
           this.user.user_role_name="Supervisor";
          break;
          case 'analyst':
          this.user.user_role_name="Analyst";
         break;
         case 'technician':
         this.user.user_role_name="Technician";
        break;
        case 'service_agent':
        this.user.user_role_name="ServiceAgent";
       break;
      }
      console.log(this.user);
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

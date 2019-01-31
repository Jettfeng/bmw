import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenService } from '../../../services/authen/authen.service';
import {TranslateService, TranslationChangeEvent} from '@ngx-translate/core';
// declare var UIkit: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading = false;
  language = this.translate.currentLang;
  nextlang = '';
  changemessage = '';
 
  changeLang() {
    this.translate.use(this.nextlang);
    this.language = this.nextlang;
    this.langmassage();
  }
     
  langmassage(){
    if(this.language == 'en'){
      this.nextlang = 'zh';
      this.changemessage='切换为中文';
    }else{
      this.nextlang = 'en';
      this.changemessage='Show in English';
    }
  }

  alert = {
    show: false,
    message : "",
  }

  form = {
    username : '',
    password: '',
  }

  constructor(private router : Router, private auth : AuthenService, public translate: TranslateService) { }

  ngOnInit() {
    this.langmassage();
  }

  login(){
    this.alert.show=false;
    this.loading = true;
    this.auth.userLogin(this.form.username, this.form.password).then((res:any)=>{
        this.loading = false;
        console.log(res.user);
        if(res.user.user_role_id != ""){
          localStorage.setItem('userType', res.user.user_role_id);
          localStorage.setItem('userName', res.user.username);
          localStorage.setItem('userId', res.user.id);
          localStorage.setItem('dealerId', res.user.dealer_id);
          this.router.navigate(['menu']);
         // this.router.navigate(['menu']);
         this.router.navigate(['dashboard', 'car', res.user.dealer_id]);
        }
    }).catch(err=>{
      //========接口访问不了，为了测试 start============
      let res= {"auth":{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIwNDAzMjdGRC01MTlFLTQ1MEItODJCMi0zQ0MxRDg1MEExQjEiLCJpc3MiOiJodHRwOlwvXC81Mi4yMzEuMTUzLjc5XC9zZXJ2aWNlc1wvcHVibGljXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNTQ4OTI1MTk3LCJleHAiOjE1NDkwMTE1OTcsIm5iZiI6MTU0ODkyNTE5NywianRpIjoiM0pPc3d6Wjk1MUFrRmtuOSJ9.7dPoj2R9J00yFkhfu4mmC1HQ2WlPaBommSEVt27QEHA"},"user":{"id":"040327FD-519E-450B-82B2-3CC1D850A1B1","username":"admin_yandebao","fullname":null,"email":null,"tel":null,"status":"enable","user_role_id":"admin","dealer_id":"2623A49A-E824-462C-83BE-39765A383181","created_at":"2019-01-07 14:15:54","updated_at":"2019-01-07 14:24:55","deleted_at":null}};
       localStorage.setItem('authToken', res.auth.token);
      localStorage.setItem('userType', res.user.user_role_id);
      localStorage.setItem('userName', res.user.username);
      localStorage.setItem('userId', res.user.id);
      localStorage.setItem('dealerId', res.user.dealer_id);
      this.router.navigate(['menu']);
     this.router.navigate(['dashboard', 'car', res.user.dealer_id]);
//==================end===================
       this.alert.show = true;
        this.alert.message = this.translate.instant('Username or Password Incorrect');
        this.loading = false;
    });
  }
}

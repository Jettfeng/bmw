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
        }
    }).catch(err=>{
      this.alert.show = true;
      this.alert.message = this.translate.instant('Username or Password Incorrect');
      this.loading = false;
    });
  }
}

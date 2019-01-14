import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dealerId = '';
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
  
  role = {
    admin: false,
    supervisor: false,
    technician: false,
    analyst: false,
  }

  constructor(private router:Router, public translate: TranslateService) { }

  ngOnInit() {
    
    this.dealerId = localStorage.getItem('dealerId');
    let userType = localStorage.getItem('userType');
    this.role[userType] = true;
    this.langmassage();
  }

  dealerManagement(){
    this.router.navigate(['dealer', 'list']);
  }

  userManagement(){
    this.router.navigate(['user', 'list', this.dealerId]);
  }

  dashboard(){
    this.router.navigate(['dashboard', 'car', this.dealerId]);
  }

  exportData(){
    this.router.navigate(['data', 'export', this.dealerId]);
  }
  
  beaconManagement(){
    this.router.navigate(['beacon', 'list', this.dealerId]);
  }

  carManagement(){
    this.router.navigate(['car', 'list', this.dealerId]);
  }

  profileManagement(){
    this.router.navigate(['profile', 'edit']);
  }
}

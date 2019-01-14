 import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  //encapsulation: ViewEncapsulation.Native
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  dealerId = '';
    
  
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
     
  }

   
  userManagement(){
    this.router.navigate(['user', 'list', this.dealerId]);
  }

  dashboard(){
    this.router.navigate(['dashboard', 'car', this.dealerId]);
  }

 

  carManagement(){
    this.router.navigate(['car', 'list', this.dealerId]);
  }

  profileManagement(){
    this.router.navigate(['profile', 'edit']);
  }
}

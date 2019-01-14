import { Component, OnInit, EventEmitter, Input, Output  } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AuthenService } from '../../services/authen/authen.service';

@Component({
  selector: 'app-header_n',
  templateUrl: './header_n.component.html',
  styleUrls: ['./header_n.component.scss']
})
export class Header_nComponent implements OnInit {
  @Input() backPath: boolean = false;
  @Output() onClickButton = new EventEmitter<string>();

  account = {
    username:"",
    role:"",
  }

  role = {
    admin: false,
    supervisor: false,
    technician: false,
    analyst: false,
  }

  button = {
    back:false,
  }

  constructor(private router : Router, private location: Location, private auth : AuthenService) { }

  ngOnInit() {
    this.button.back = this.backPath;
    let userType = localStorage.getItem('userType');
    let userName = localStorage.getItem('userName');
    this.role[userType] = true;
    this.account.username = userName;
    this.account.role = userType;
  }

  onClick(button){
    this.onClickButton.emit(button);
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

import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import {TranslateService, TranslationChangeEvent} from '@ngx-translate/core';
declare var UIkit: any;

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  dealerId = '';
  loading = false;

  user = {
    username: '',
    fullname: '',
    password: '',
    user_role_id: 0,
    email: '',
    tel: '',
    dealer_id: '',
  }

  roles = [];

  confirmModal = {
    elementId:"user-create-confirm-modal",
    detail:this.translate.instant("Do you confirm to create new User?"),
    state:"",
  }

  constructor(private router : Router, private activeRoute: ActivatedRoute, private userService: UserService, private translate: TranslateService) {
    this.dealerId = activeRoute.snapshot.params['dealerId'];
    this.user.dealer_id = this.dealerId;
  }

  ngOnInit() {
    this.loadUser();
  }

  loadUser(){
    this.loading = true;
    this.userService.roleList().then((res:any)=>{
      this.roles = res.data.role;
      this.loading = false;
    }).catch((err:any)=>{
      UIkit.notification({
        message: this.translate.instant('Cannot load user role'),
        status: 'warning',
        timeout: 1000
      });
      this.loading = false;
    })
  }

  createUser(){
    if(this.user.username != "" && this.user.password != "" && this.user.user_role_id != 0){
      let _elementId = "#"+this.confirmModal.elementId;
      UIkit.modal(_elementId).show();
    } else {
      if(this.user.username == ""){
        UIkit.notification({
          message: this.translate.instant('Username cannot empty!!!'),
          status: 'warning',
          timeout: 1000
        });
      }
      if(this.user.password == ""){
        UIkit.notification({
          message: this.translate.instant('Password cannot empty!!!'),
          status: 'warning',
          timeout: 1000
        });
      }
      if(this.user.user_role_id == 0){
        UIkit.notification({
          message: this.translate.instant('Please select position'),
          status: 'warning',
          timeout: 1000
        });
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
      this.userService.create(this.user).then((res:any)=>{
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

}

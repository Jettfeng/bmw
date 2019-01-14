import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
declare var UIkit: any;

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  dealerId = '';
  loading = false;
  users = [];
  
  pageController = {
    itemPerPage: 10,
    itemNumber: 0,
    pageNumber: 0,
    pageIndex: 1,
    pageArray: [],
  };

  constructor(private router : Router, private activeRoute: ActivatedRoute, private userService: UserService) {
    this.dealerId = activeRoute.snapshot.params['dealerId'];
  }

  ngOnInit() {
    this.loadUser();
  }

  loadUser(){
      this.loading = true;
      this.userService.list(this.dealerId, (this.pageController.pageIndex - 1) * this.pageController.itemPerPage, this.pageController.itemPerPage).then((res:any)=>{
        this.pageController.itemNumber = res.data.count;
        this.pageController.pageNumber = Math.ceil(this.pageController.itemNumber / this.pageController.itemPerPage);
        this.pageController.pageArray = [];
  
        ///make pagination
        this.pageController.pageArray.push(this.pageController.pageIndex);
        for(let count = 0 ; count < 3 ; count++){
          if(this.pageController.pageIndex - count - 1 > 0 ){
            this.pageController.pageArray.unshift(this.pageController.pageIndex - count - 1);
          }
        }
        for(let count = 0 ; count < 3 ; count++){
          if(this.pageController.pageIndex + count < this.pageController.pageNumber){
            this.pageController.pageArray.push(this.pageController.pageIndex + count + 1);
          }
        }
        this.users = res.data.user;
        this.loading = false;
      }).catch((err:any)=>{
        UIkit.notification({
          message: err,
          status: 'warning',
          timeout: 1000
        });
        this.loading = false;
      });
  }

  createUser(){
    this.router.navigate(['user', 'create', this.dealerId]);
  }

  editUser(userId){
    this.router.navigate(['user', 'edit', this.dealerId, userId]);
  }

  onHeaderClick(event){
    if(event == 'back'){
      this.router.navigate(['menu']);
    }
  }

  changePageonClick(option, index){
    if(option){
      this.pageController.pageIndex = index;
    }else{
      this.pageController.pageIndex += index;
    }
    this.loadUser();
  }
}

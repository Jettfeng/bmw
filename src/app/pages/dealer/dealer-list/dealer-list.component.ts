import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { DealerService } from '../services/dealer.service';

@Component({
  selector: 'app-dealer-list',
  templateUrl: './dealer-list.component.html',
  styleUrls: ['./dealer-list.component.scss']
})
export class DealerListComponent implements OnInit {
  
  pageController = {
    itemPerPage: 10,
    itemNumber: 0,
    pageNumber: 0,
    pageIndex: 1,
    pageArray: [],
  };

  loading = false;
  dealers = [];

  constructor(private router : Router, private dealerService : DealerService) { }

  ngOnInit() {
    this.loadDealer();
  }

  loadDealer(){
    this.loading = true;
    this.dealerService.list((this.pageController.pageIndex - 1) * this.pageController.itemPerPage, this.pageController.itemPerPage).then((res:any)=>{
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
      this.dealers = res.data.dealer;
      this.loading = false;
    }).catch((err:any)=>{
      this.loading = false;
    });
  }

  changePageonClick(option, index){
    if(option){
      this.pageController.pageIndex = index;
    }else{
      this.pageController.pageIndex += index;
    }
    this.loadDealer();
  }

  create(){
    this.router.navigate(['dealer', 'create']);
  }

  view(hid){
    this.router.navigate(['dealer', 'information', hid]);
  }

  onHeaderClick(event){
    if(event == 'back'){
      this.router.navigate(['menu']);
    }
  }
}

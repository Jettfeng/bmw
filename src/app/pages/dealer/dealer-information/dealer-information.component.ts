import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';
import { DealerService } from '../services/dealer.service';

@Component({
  selector: 'app-dealer-information',
  templateUrl: './dealer-information.component.html',
  styleUrls: ['./dealer-information.component.scss']
})
export class DealerInformationComponent implements OnInit {

  dealerId = '';
  loading = false;
  dealer = {
    name:'',
    address:'',
    city:'',
    street:'',
    state:'',
    country:'',
    zipcode:'',
    contact_name:'',
    contact_position:'',
    contact_email:'',
    contact_tel:'',
    station:[],
  };


  constructor(private router : Router, private activeRoute: ActivatedRoute, private dealerService: DealerService) {
    this.dealerId = activeRoute.snapshot.params['dealerId'];
  }

  ngOnInit() {
    this.loadDealer();
  }

  loadDealer(){
    this.loading = true;
    this.dealerService.get(this.dealerId).then((res:any)=>{
      this.dealer = res.data.dealer;
      this.loading = false;
    }).catch((err:any)=>{
      this.loading = false;
    });
  }

  editDealer(){
    this.router.navigate(['dealer', 'edit', this.dealerId]);
  }

  configStation(){
    this.router.navigate(['station', 'config', this.dealerId]);
  }

  configNode(){
    this.router.navigate(['node', 'config', this.dealerId]);
  }

  configNotification(){
    this.router.navigate(['dealer', 'config', 'notification', this.dealerId]);
  }

  configBeacon(){
    this.router.navigate(['dealer', 'config', 'beacon', this.dealerId]);
  }

  onHeaderClick(event){
    if(event == 'back'){
      this.router.navigate(['dealer', 'list']);
    }
  }
}

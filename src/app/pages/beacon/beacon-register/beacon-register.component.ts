import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';
declare var UIkit: any;

@Component({
  selector: 'app-beacon-register',
  templateUrl: './beacon-register.component.html',
  styleUrls: ['./beacon-register.component.scss']
})
export class BeaconRegisterComponent implements OnInit {

  dealerId = '';
  loading = false;

  form = {
    id: '',
    uuid: '',
    name:'',
  }

  constructor(private router : Router, private activeRoute: ActivatedRoute) {
    this.dealerId = activeRoute.snapshot.params['dealerId'];
  }

  ngOnInit() {
    UIkit.util.on('#modal-confirm', 'shown', function () {
  });
  }

  registerBeacon(){
    UIkit.modal('#modal-confirm').show();
  }

  cancelBeacon(){
    this.router.navigate(['beacon', 'list', this.dealerId ]);
    UIkit.modal('#modal-confirm').$destroy(true);
  }

  modalConfirm(){
    UIkit.util.on('#modal-confirm', 'hidden', function () {
      UIkit.modal('#modal-confirm').$destroy(true);
    });
    UIkit.modal('#modal-confirm').hide();
    this.router.navigate(['beacon', 'list', this.dealerId ]);
  }

  modalCancel(){
    UIkit.modal('#modal-confirm').hide();
  }
}

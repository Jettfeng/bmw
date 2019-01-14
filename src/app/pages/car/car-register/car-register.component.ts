import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
declare var UIkit: any;

@Component({
  selector: 'app-car-register',
  templateUrl: './car-register.component.html',
  styleUrls: ['./car-register.component.scss']
})
export class CarRegisterComponent implements OnInit {

  dealerId = '';
  loading = false;
  form = {
    licensePlate: '',
    brand: '',
    model: '',
    color: '',
    beaconId: '',
  }

  constructor(private router : Router) { }

  ngOnInit() {
    UIkit.util.on('#modal-confirm', 'shown', function () {
  });
  }

  registerCar(){
    UIkit.modal('#modal-confirm').show();
  }

  cancelCar(){
    UIkit.modal('#modal-confirm').$destroy(true);
    this.router.navigate(['car', 'list', this.dealerId]);
  }

  modalConfirm(){
    UIkit.util.on('#modal-confirm', 'hidden', function () {
      UIkit.modal('#modal-confirm').$destroy(true);
    });
    UIkit.modal('#modal-confirm').hide();
    this.router.navigate(['car', 'list', this.dealerId]);
  }

  modalCancel(){
    UIkit.modal('#modal-confirm').hide();
  }

}

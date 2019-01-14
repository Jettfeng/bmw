import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  //encapsulation: ViewEncapsulation.Native
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

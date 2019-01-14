import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
declare var UIkit: any;
@Component({
  selector: 'app-confirm-delete-modal',
  templateUrl: './confirm-delete-modal.component.html',
  styleUrls: ['./confirm-delete-modal.component.scss']
})
export class ConfirmDeleteModalComponent implements OnInit {
  @Input() header: string = "Confirm";
  @Input() detail: string = "Are you confirm?";
  @Input() confirm: string = "Confirm";
  @Input() cancel: string = "Cancel";
  @Output() onClick = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  clickConfirm(){
    this.onClick.emit(true);
  }

  clickCancel(){
    this.onClick.emit(false);
  }
}

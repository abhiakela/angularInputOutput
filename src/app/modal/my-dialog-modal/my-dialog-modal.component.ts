import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-my-dialog-modal',
  templateUrl: './my-dialog-modal.component.html',
  styleUrls: ['./my-dialog-modal.component.scss']
})
export class MyDialogModalComponent implements OnInit {


  fromPage: string = '';
  fromDialog: string = '';

  constructor(
    public dialogRef: MatDialogRef<MyDialogModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    debugger
    this.fromPage = data.pageValue;
    this.fromDialog = data.pageValue
  }

  ngOnInit() {

  }

  closeDialog() {
    debugger
    this.dialogRef.close({ event: 'close', data: this.fromDialog });
  }


}

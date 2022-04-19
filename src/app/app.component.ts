import { Component } from '@angular/core';
import { DialogPosition, MatDialog } from '@angular/material/dialog';
import { MyDialogModalComponent } from './modal/my-dialog-modal/my-dialog-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'input-output';
  dialogValue: string = 'English';
  sendValue: string = this.dialogValue;

  constructor(
    public dialog: MatDialog
  ) { }


  openDialog(event: any): void {
    console.log(this.sendValue);



    const dialogPosition: DialogPosition = {
      top: event.y + 30 + 'px',
      left: event.x - 290 + 'px'
    };
    const dialogRef = this.dialog.open(MyDialogModalComponent, {
      width: '300px',
      backdropClass: 'backdrop-class',
      panelClass: 'panel-class',
      data: { pageValue: this.sendValue },
      position: dialogPosition
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.dialogValue = result.data;
    });
  }

}

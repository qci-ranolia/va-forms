import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dcustomdialog',
  templateUrl: './dcustomdialog.component.html',
  styleUrls: ['./dcustomdialog.component.scss']
})
export class DcustomdialogComponent  {

  constructor(
    public dialogRef: MatDialogRef<DcustomdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

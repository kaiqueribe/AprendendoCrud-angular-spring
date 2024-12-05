import {Component, Inject, inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-confirmation-dialog',
  standalone: false,

  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.scss'
})
export class ConfirmationDialogComponent implements OnInit {

  // constructor(public dialogRef: MatDialogRef<ConfirmationDialogComponent>) {
  // }

  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) {}


  ngOnInit() {
  }

  onConfirm(result: boolean): void {
    this.dialogRef.close(result);
  }


}

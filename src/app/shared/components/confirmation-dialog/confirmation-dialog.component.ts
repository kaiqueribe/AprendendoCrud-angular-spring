import {Component, inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-confirmation-dialog',
  standalone: false,

  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.scss'
})
export class ConfirmationDialogComponent implements OnInit{

  constructor() {}

  readonly dialog = inject(MatDialog);




  ngOnInit(){

  }

}

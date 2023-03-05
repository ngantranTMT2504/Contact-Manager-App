import { Component, Inject, OnInit} from '@angular/core';
import { ICard } from '../app.models';
import { Test } from '../common.utils';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  contact: ICard;

  constructor(
    public dialogRef: MatDialogRef<ViewContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){
    this.contact = data;
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ICard } from '../app.models';
import { Test } from '../common.utils';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  contact: ICard;

  name:string = ""
  mobile:string = ""
  email:string = ""
  image:string = ""

  constructor(public dialogRef: MatDialogRef<EditContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.contact = data;
    }
  ngOnInit(): void {
  }
  onNoClick(): void {
    this.contact.name = this.name;
    this.contact.mobile = this.mobile;
    this.contact.email = this.email;
    this.contact.image = this.image;
    this.dialogRef.close(this.contact);
  }

}

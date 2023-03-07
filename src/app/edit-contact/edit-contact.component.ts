import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  reactiveForm!: FormGroup;

  constructor(public dialogRef: MatDialogRef<EditContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.contact = data;
    }
  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl(this.contact.name),
      mobile: new FormControl(this.contact.mobile),
      email: new FormControl(this.contact.email),
      image: new FormControl(this.contact.image),
    })
  }
  onNoClick(): void {
    this.contact.name = this.reactiveForm.get('name')?.value;
    this.contact.mobile = this.reactiveForm.get('mobile')?.value;
    this.contact.email = this.reactiveForm.get('email')?.value;
    this.contact.image = this.reactiveForm.get('image')?.value;
    this.dialogRef.close(this.contact);
  }

}

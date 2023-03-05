import { Component, OnInit} from '@angular/core';
import { ICard } from '../app.models';
import { Test } from '../common.utils';
import {MatDialog} from '@angular/material/dialog';
import { ViewContactComponent } from '../view-contact/view-contact.component';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {
  
  contacts: {name: string, mobile: string, email: string, image: string}[] = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.contacts = Test.contacts;
  }

  searchText:string = '';
  hiddenContactCard: boolean = false;

  searchTextChange(searchValue: string) {
    this.searchText= searchValue;
  }

  showDetail(data: ICard){
    const dialogRef = this.dialog.open(ViewContactComponent, {
      data: data,
    });
  }
}

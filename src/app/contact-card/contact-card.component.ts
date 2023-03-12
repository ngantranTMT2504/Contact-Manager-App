import { Component, OnInit} from '@angular/core';
import { ICard } from '../app.models';
import {MatDialog} from '@angular/material/dialog';
import { ViewContactComponent } from '../view-contact/view-contact.component';
import { EditContactComponent } from '../edit-contact/edit-contact.component';
import { ContactService } from '../Service/contact.service';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css'],
  providers: [ContactService],
})
export class ContactCardComponent implements OnInit {
  
  allContacts: ICard[] = [];

  constructor(public dialog: MatDialog, private contactService: ContactService) {}

  ngOnInit(): void {
    this.fetchContact()
  }

  searchText:string = '';
  // hiddenContactCard: boolean = false;

  searchTextChange(searchValue: string) {
    this.searchText= searchValue;
  }

  fetchContact(){
    this.contactService.fetchContact()
    .subscribe((contacts) => {this.allContacts = contacts});
  }

  showDetail(data: ICard){
    const dialogRef = this.dialog.open(ViewContactComponent, {
      data: data,
    });
  }
  showEditdetail(data: ICard){
    const dialogRef = this.dialog.open(EditContactComponent, {
      data: data,
    });
    dialogRef.afterClosed().subscribe(result => {
      result = data
      console.log(result);
    });
  }

  deleteContact(id: string){
    this.contactService.deleteContact(id);
  }
  
}

import { Component, Input, OnInit } from '@angular/core';
import { ContactService } from '../Service/contact.service';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {

  constructor(private contactService: ContactService) {}

  contacts: { name: string, mobile: string, email: string, image: string}[] = [];

  ngOnInit(): void {
    this.contacts = this.contactService.contacts;
  }
  searchText:string = '';
  hiddenContactCard: boolean = false;

  searchTextChange(searchValue: string) {
    this.searchText= searchValue;
  }

  showDetail(contact:{ name: string, mobile: string, email: string, image: string}){
    this.contactService.showContactDetails(contact);
  }
}

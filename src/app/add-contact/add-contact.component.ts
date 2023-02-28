import { Component, OnInit } from '@angular/core';
import { ContactService } from '../Service/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  contactName: string = '';
  contactMobile: string = '';
  contactEmail: string = '';
  contactImage: string = '';

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
  }

  addContact() {
    this.contactService.addContact(this.contactName,this.contactMobile,this.contactEmail,this.contactImage)
  }
}

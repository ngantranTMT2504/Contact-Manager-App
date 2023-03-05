import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Test } from '../common.utils';



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

  constructor() {}

  ngOnInit(): void {
  }

  addContact() {
    Test.addContact(this.contactName,this.contactMobile,this.contactEmail,this.contactImage);
    console.log(Test.contacts);
  }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}

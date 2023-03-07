import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Test } from '../common.utils';



@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  reactiveForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      image: new FormControl('', Validators.required)
    });
  }

  addContact() {
    Test.addContact(this.reactiveForm.get('name')?.value,
    this.reactiveForm.get('mobile')?.value,
    this.reactiveForm.get('email')?.value,
    this.reactiveForm.get('image')?.value);
    console.log(Test.contacts);
  }
  

  getErrorMessage() {
    if (this.reactiveForm.get('email')?.hasError('required')) {
      return 'You must enter a value';
    }
    return this.reactiveForm.get('email')?.hasError('email') ? 'Not a valid email' : '';
  }
  
}

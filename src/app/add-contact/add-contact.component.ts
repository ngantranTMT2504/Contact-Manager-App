import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../Service/contact.service';




@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
  providers: [ContactService]
})
export class AddContactComponent implements OnInit {

  reactiveForm!: FormGroup;
  
  constructor(private contactService : ContactService) {}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl('', Validators.required),
      mobile: new FormControl('', [Validators.required, Validators.maxLength(10)]),   
      email: new FormControl('', [Validators.required, Validators.email]),
      image: new FormControl('', Validators.required)
    })
  }

  createContact(contacts:{name: string,mobile: string,email: string,image: string}) {
    this.contactService.createContact(contacts);
    this.reactiveForm.reset();
  }
  
}

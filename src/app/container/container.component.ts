import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  contactManager: string = "Contact Manager"
  viewContact: string = "View Contact"
  editContact: string = "Edit Contact"
  addContact: string = "Add Contact";

  

}

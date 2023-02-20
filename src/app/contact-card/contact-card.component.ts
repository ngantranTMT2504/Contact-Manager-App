import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contacts = [
    {name: "Kalin Tran", mobile: "07894561352", email: "kalin@gmail.com", image: '/assets/images/avatar1.jpg'},
    {name: "John Constantine", mobile: "07894561352", email: "john@gmail.com", image: '/assets/images/avatar2.png'},
    {name: "Johnathan Ngo", mobile: "07894561352", email: "johnathan@gmail.com", image: '/assets/images/avatar3.png'},
    {name: "Scristian", mobile: "07894561352", email: "Scristian@gmail.com", image: '/assets/images/avatar4.jpg'}
  ]

  searchText:string = '';

  searchTextChange(searchValue: string) {
    this.searchText= searchValue;
  }
}

import { Component, Input, OnInit } from '@angular/core';

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
    {name: "Kalin Tran", mobile: "0789456135", email: "kalin@gmail.com", image: '/assets/images/avatar1.png'},
    {name: "John Constantine", mobile: "0831245321", email: "john@gmail.com", image: '/assets/images/avatar2.png'},
    {name: "Johnathan Ngo", mobile: "0789352894", email: "johnathan@gmail.com", image: '/assets/images/avatar3.png'},
    {name: "Scristian", mobile: "0381967211", email: "Scristian@gmail.com", image: '/assets/images/avatar4.jpg'},
    {name: "Karma Edison", mobile: "0753666203", email: "Karma@gmail.com", image: '/assets/images/avatar5.png'},
    {name: "Lucian", mobile: "0831255478", email: "Lucian@gmail.com", image: '/assets/images/avatar6.png'},
  ]

  searchText:string = '';
  @Input() hiddenMainPage: boolean | undefined ;
  @Input() hiddenEditPage: boolean | undefined ; 


  searchTextChange(searchValue: string) {
    this.searchText= searchValue;
  }

}

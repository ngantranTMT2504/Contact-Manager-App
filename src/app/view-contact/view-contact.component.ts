import { Component, OnInit } from '@angular/core';
import { ContactService } from '../Service/contact.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  contact?:{name: string, mobile: string, email: string, image: string};

  ngOnInit(): void {
    this.contactService.onViewButtonClick.subscribe((data:{name: string, mobile: string, email: string, image: string}) => {
      this.contact = data
    })
  }

}

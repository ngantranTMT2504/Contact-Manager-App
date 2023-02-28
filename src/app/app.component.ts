import { Component } from '@angular/core';
import { ContactService } from './Service/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ContactService]
})
export class AppComponent {

  constructor(private contactService: ContactService) {}

}

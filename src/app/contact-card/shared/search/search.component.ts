import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactService } from 'src/app/Service/contact.service';
import { AddContactComponent } from '../../../add-contact/add-contact.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ContactService]
})
export class SearchComponent implements OnInit {

  constructor(public dialog: MatDialog, private contactService: ContactService) {}

  ngOnInit(): void {
    
  }

  searchValue: string = '';
  @Output() searchChange:EventEmitter<string> = new EventEmitter<string>();

  onSearchValueChange() {
    this.searchChange.emit(this.searchValue);
  }
  openAddContactComp() {
    const dialogRef = this.dialog.open(AddContactComponent);
  }
  clear(){
    this.contactService.clearContact();
  }  
}

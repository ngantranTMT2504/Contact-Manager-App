import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddContactComponent } from '../../../add-contact/add-contact.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

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

  
}

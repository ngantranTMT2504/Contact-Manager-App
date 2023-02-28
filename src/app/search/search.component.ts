import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchValue: string = '';
  

  @Output() searchChange:EventEmitter<string> = new EventEmitter<string>();

  onSearchValueChange() {
    this.searchChange.emit(this.searchValue);
  }

  
}

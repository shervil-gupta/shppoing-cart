import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  public searchQuery: string;
  public title: string;
  constructor() {
    this.searchQuery = '';
    this.title = 'Search for Products';
  }

  ngOnInit() {
  }

}

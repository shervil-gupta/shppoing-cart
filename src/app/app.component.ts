import {Component, Input, ViewChild, AfterViewInit} from '@angular/core';
import {createViewChild} from '@angular/compiler/src/core';
import {SearchBarComponent} from './search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public holder1: string;
  // @ts-ignore
  @ViewChild(SearchBarComponent) c;
  title = 'shopping-cart';
  onClick(e) {
    if (e === 'Enter') {
      this.holder1 = this.c.searchQuery;
      alert(this.holder1);
    }
  }
}

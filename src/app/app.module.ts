import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ItemComponent } from './item/item.component';
import {ResultComponent} from './result/result.component';
import {FormsModule} from '@angular/forms';
import { SearchResultComponent } from './search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ItemComponent,
    ResultComponent,
    SearchResultComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

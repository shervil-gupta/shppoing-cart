import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ResultComponent } from './result/result.component';
import {ResultService} from './result.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ResultService],
  bootstrap: [AppComponent]
})
export class AppModule { }

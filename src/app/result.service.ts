import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  getResult() {
    // return ['burger', 'tikkki', 'hamburger'];
     return ['burger', 'tikkki', 'hamburger', 'chicken'];
     // return ['burger', 'tikkki', 'hamburger', 'chicken','dosa', 'manchurian'];
  }
  constructor() {

  }
}

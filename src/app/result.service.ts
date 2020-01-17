import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  getResult() {
    return 'burger';
  }
  constructor() {

  }
}

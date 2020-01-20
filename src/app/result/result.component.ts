import { Component, OnInit } from '@angular/core';
import {ResultService} from '../result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  // tslint:disable-next-line:prefer-const
   public lists;
   public length;
// @ts-ignore
  constructor(result: ResultService) {
    this.lists = result.getResult();
    // tslint:disable-next-line:no-unused-expression
    this.length = (12 / this.lists.length).toString();
    // console.log(this.length);
  }

  ngOnInit() {
  }
}

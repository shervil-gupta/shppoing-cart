import {Component, OnInit, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() public holder: string;
  public itemName: string;
  public itemPrice: number;
  public itemQuantity: number;
  public itemImage: string;
  public totalPrice: number;
  // tslint:disable-next-line:align
  constructor() {
    this.itemPrice = 100;
    this.itemQuantity = 0;
    this.itemImage = 'default';
    this.totalPrice = 0;
  }
  change = (x) => {
    if (x !== '') {
      // tslint:disable-next-line:radix
      this.itemQuantity = parseInt(x);
    } else {
      this.itemQuantity = 0;
    }
    this.totalPrice = this.itemQuantity * this.itemPrice;
  }
  ngOnChange() {
    this.itemName = this.holder;
  }
  ngOnInit(): void { }

}

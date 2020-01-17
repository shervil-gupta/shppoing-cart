import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  public itemName: string;
  public itemPrice: number;
  public itemQuantity: number;
  public itemImage: string;
  constructor() {
    this.itemName = 'NO NAME';
    this.itemPrice = 0;
    this.itemQuantity = 0;
    this.itemImage = 'default.png';
  }
  ngOnInit() {
  }

}

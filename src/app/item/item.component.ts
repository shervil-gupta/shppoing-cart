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
  constructor(x: string = 'no_name', y: number = 0, z: number = 0, u: string = 'default.png') {
    this.itemName = x;
    this.itemPrice = y;
    this.itemQuantity = z;
    this.itemImage = u;
  }

  ngOnInit() {
  }

}

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
  public itemImage: String;
  constructor() {
    this.itemName = 'NO NAME';
    this.itemPrice = 0;
    this.itemQuantity = 0;
    this.itemImage = 'default';
  }
  change() {
   const x = document.getElementById('t1');
   this.itemQuantity = parseInt(x.innerText.toString());
   this.itemPrice = (this.itemQuantity * this.itemPrice);
   const y = document.getElementById('t2');
   alert(this.itemPrice);
  }
  ngOnInit() { }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tap } from './tap.model';

@Component({
  selector: 'new-tap',
  template: `
  <div *ngIf="childSelectedTap">
    <h3>New Beer Keg</h3>
    <div>
      <label>Enter Beer Name</label>
      <input #newName>
    </div>
    <div>
      <label>Enter Beer Brand</label>
      <input #newBrand>
    </div>
    <div>
      <label>Enter Beer Price </label>
      <input #newPrice>
    </div>
    <div>
      <label>Enter Alcohol Percentage</label>
      <input #newAlcohol>
      <button id='add' (click)="
        addClicked(newName.value, newBrand.value, newPrice.value, newAlcohol.value);
        newName.value = '';
        newBrand.value = '';
        newPrice.value = 0 ;
        newAlcohol.value = 0 ;
      ">Add</button>
    </div>
  </div>
  `
})

export class NewTapComponent {
  @Input() childSelectedTap: Tap;
  @Output() newTapSender = new EventEmitter();
  addClicked(name: string, brand: string, price: number, alcohol:number) {
    var newTapToAdd: Tap = new Tap(name, brand, price, alcohol);
    this.newTapSender.emit(newTapToAdd);
  }
}

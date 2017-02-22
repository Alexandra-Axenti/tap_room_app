import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tap } from './tap.model';


@Component({
  selector: 'tap-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all" selected="selected">Show All</option>
    <option value="havePlenty">Show Kegs that still have enough beer</option>
    <option value="needRefill">Show kegs that need to be refilled</option>
  </select>
  <div *ngFor="let currentTap of childTapList | vanishing: selectedVanishing">
    <h3 class='col-xs-4'>{{ currentTap.name }} {{ currentTap.brand }} {{ currentTap.price }} {{ currentTap.alcohol }} {{currentTap.kegSize}}
      <pour-tap
        [childSelectedTap] = "currentTap"
      ></pour-tap>
      <button
        (click)="editButtonHasBeenClicked(currentTap)"
      >Edit</button>
    </h3>
  </div>
  `
})

export class TapListComponent {
  @Input() childTapList: Tap[];
  @Output() clickSender = new EventEmitter();
  public selectedVanishing: string = "all";
  onChange(optionFromMenu) {
  this.selectedVanishing = optionFromMenu;
  console.log(this.selectedVanishing);
}
  editButtonHasBeenClicked(tapToEdit: Tap) {
  this.clickSender.emit(tapToEdit);
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tap } from './tap.model';


@Component({
  selector: 'tap-list',
  template: `
  <div *ngFor="let currentTap of childTapList">
    <h3>{{ currentTap.name }} {{ currentTap.brand }} {{ currentTap.price }} {{ currentTap.alcohol }} {{currentTap.kegSize}}
      <pour-tap
        [childSelectedTap] = "currentTap"
      ></pour-tap>
    </h3>
  </div>
  `
})

export class TapListComponent {
  @Input() childTapList: Tap[];
  // @Output() clickSender = new EventEmitter();
  // editButtonHasBeenClicked(taskToEdit: Task) {
  // this.clickSender.emit(taskToEdit);
  // }
}

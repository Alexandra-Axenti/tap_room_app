import { Component } from '@angular/core';
import { Tap } from './tap.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Bar Night Owl</h1>
    <tap-list
      [childTapList] = "masterTapList"
      (clickSender) = "showDetails($event)"
    ></tap-list>
    <edit-tap
      [childSelectedTap]="selectedTap"
      (doneClickedSender)="finishedEditing()"
    ></edit-tap>
    <new-tap
      (newTapSender) = "addTap($event)"
    >New Tap</new-tap>
  </div>
  `
})

export class AppComponent {
      public masterTapList: Tap[] = [
          new Tap("Asahi Dry Zero", "Asahi", 200, 0.04),
          new Tap("Heineken Light", "Heneiken", 250, 0.05),
          new Tap("Gwei Lo Pale Ale", "Gwei Lo", 300, 0.07),
          new Tap("Warsteiner Zero", "Warsteiner", 350, 0.00),
      ];

selectedTap: Tap = null;
showDetails(clickedTap: Tap) {
  this.selectedTap = clickedTap;
  }
finishedEditing() {
  this.selectedTap = null;
  }
addTap(newTapFromChild: Tap) {
  this.masterTapList.push(newTapFromChild);
  }
}

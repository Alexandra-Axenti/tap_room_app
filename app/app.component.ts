import { Component } from '@angular/core';
import { Tap } from './tap.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Bar Night Owl</h1>
    <tap-list
      [childTapList] = "masterTapList"
    ></tap-list>
    <new-tap
      (newTapSender) = "addTap($event)"
    ></new-tap>
  </div>
  `
})

export class AppComponent {
      public masterTapList: Tap[] = [
          new Tap("Asahi Dry Zero", "Asahi", 200, 0.04),
          new Tap("Heineken Light", "Heneiken", 250, 0.05),
          new Tap("Gwei Lo Pale Ale", "Gwei Lo", 300, 0.07),
          new Tap("Warsteiner Non-Alcoholic", "Warsteiner", 350, 0.00),
      ];

addTap(newTapFromChild: Tap) {
  this.masterTapList.push(newTapFromChild);
  }
}

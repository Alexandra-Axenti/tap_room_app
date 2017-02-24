import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tap } from './tap.model';

@Component({
  selector: 'pour-tap',
  template:`
    <span>
    <button id='pour' (click)="pourTap()"> -- </button>
    </span>
  `
})

export class PourTapComponent {
  @Input() childSelectedTap: Tap;
  pourTap() {
    if (this.childSelectedTap.kegSize != 0) {
      this.childSelectedTap.kegSize = this.childSelectedTap.kegSize - 1;
    }
  }
}

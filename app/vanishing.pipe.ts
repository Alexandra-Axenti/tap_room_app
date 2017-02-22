import {Pipe, PipeTransform} from '@angular/core';
import {Tap} from './tap.model';

@Pipe({
  name: "vanishing",
  pure: false
})

export class VanishingPipe implements PipeTransform {
  transform(input: Tap[], sizeVerify) {
    var output = [];
    if (sizeVerify === "needRefill") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].kegSize <= 35) {
        output.push(input[i]);
      }
    }
    return output;
  } else if (sizeVerify === "havePlenty") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].kegSize > 35) {
        output.push(input[i]);
      }
    }
    return output;
  } else {
    return input;
    }
  }
}

import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.boxShadow = '0px 0px 10px white';
   }

}

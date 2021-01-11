import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = 'red'
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = '#C0D1ED'
  }

  @HostBinding('style.backgroundColor') backgroundColor: string

  constructor() { }

}

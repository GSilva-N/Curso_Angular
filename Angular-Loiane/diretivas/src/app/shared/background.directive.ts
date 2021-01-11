
import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[background]'
})
export class BackgroundDirective {



  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

    //Evitar o nativeElement
    //this.elementRef.nativeElement.style.backgroundColor = 'grey'

    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'grey')
  }

}

import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPinkBackground]'
})
export class PinkBackgroundDirective {

  constructor(
    private elementRef : ElementRef,
    private renderer2:Renderer2
  ) { 
    
      const item= this.elementRef.nativeElement
        this.renderer2.setStyle(item, 'background-color', "#F299CA")
        this.renderer2.setStyle(item, 'text-align', 'center');


  }
    

}

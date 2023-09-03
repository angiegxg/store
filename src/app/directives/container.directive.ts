import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appContainer]'
})
export class ContainerDirective {

  constructor(
    private elementRef : ElementRef,
    private renderer2:Renderer2
  ) { 
    
      const item= this.elementRef.nativeElement
        this.renderer2.setStyle(item, 'display', "flex")
        this.renderer2.setStyle(item, 'justify-content', 'space-between');
        this.renderer2.setStyle(item, 'padding', '20px');
        this.renderer2.setStyle(item, 'margin-top', '20px');
       

  }

}

import { ElementRef, Renderer2, HostListener, Directive } from '@angular/core';

@Directive({
  selector: '[appZoomColorHover]'
})
export class ZoomColorHoverDirective {

  constructor(
    private elementRef : ElementRef,
    private renderer2:Renderer2
  ) { }

  @HostListener('mouseover')
  private onMouseHover() {
    const link= this.elementRef.nativeElement
    this.renderer2.setStyle(link, 'scale', "1.5")
    this.renderer2.setStyle(link, 'filter','drop-shadow(2px 2px 5px gold)' )
   
    
  }

  @HostListener('mouseout')
  private outMouseHover() {
    const link= this.elementRef.nativeElement
    this.renderer2.setStyle(link, 'scale', "1")
    this.renderer2.setStyle(link, 'filter','none' )
    
  }

}

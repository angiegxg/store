import { AfterViewInit, Component, ElementRef, ViewChild, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.scss']
})
export class StripeComponent implements AfterViewInit, OnDestroy {
  
  @ViewChild('cardInfo') cardInfo!: ElementRef;
  public card: any;
  public error: string = '';

  ngAfterViewInit(): void {
    this.card = elements.create('payment');
    this.card.mount(this.cardInfo.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.card) {
      this.card.destroy();
    }
  }
}

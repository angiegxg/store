import { Component, HostListener} from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCounter } from 'src/app/state/selector';

@Component({
  selector: 'app-button-shopping-counter',
  templateUrl: './button-shopping-counter.component.html',
  styleUrls: ['./button-shopping-counter.component.scss']
})
export class ButtonShoppingCounterComponent {

  public counter$ = this.store.select(selectCounter);

  constructor(private store: Store<any>) {
   
  }
  isSticky: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.pageYOffset >= 130;
  }

  public navigate (): void{
    

  }

}

import { Component } from '@angular/core';
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

  public navigate (): void{
    

  }

}

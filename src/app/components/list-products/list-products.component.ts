import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectFilter } from 'src/app/state/selector';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {
  public filter$ = this.store.select(selectFilter);

  constructor(private store: Store<any>) {
   
  }
}


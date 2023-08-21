import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductModel } from 'src/app/models/productModel.interface';
import { selectShopping } from 'src/app/state/selector';

@Component({
  selector: 'app-shooping',
  templateUrl: './shooping.component.html',
  styleUrls: ['./shooping.component.scss']
})
export class ShoopingComponent {

  public shopping$ = this.store.select(selectShopping);
  public counts: { [title: string]: number } = {}; 
  constructor(private store: Store<any>) {
    this.shopping$.subscribe((products: ProductModel[]) => {
      this.countProduct(products);
    });
  }

  countProduct(products: ProductModel[]) {
    this.counts = {}; 
    
    products.forEach(product => {
      const title = product.title;
      this.counts[title] = (this.counts[title] || 0) + 1;
    });
  }
}

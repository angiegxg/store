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
  public productCounts: { [title: string]: { count: number, price: number } } = {}; 

  constructor(private store: Store<any>) {
    this.shopping$.subscribe((products: ProductModel[]) => {
      this.countProducts(products);
    });
  }

  countProducts(products: ProductModel[]) {
    this.productCounts = {}; 

    products.forEach(product => {
      const title = product.title;
      const price = product.price;
      
      if (!this.productCounts[title]) {
        this.productCounts[title] = { count: 1, price: price };
      } else {
        this.productCounts[title].count++;
      }
    });
  }

  getProductTitles(): string[] {
    return Object.keys(this.productCounts);
  }
}

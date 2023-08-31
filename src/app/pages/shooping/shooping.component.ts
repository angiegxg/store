import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductModel } from 'src/app/models/productModel.interface';
import { ProductShoppingModel } from 'src/app/models/productShoppingModel.interface';
import { selectShopping } from 'src/app/state/selector';

@Component({
  selector: 'app-shooping',
  templateUrl: './shooping.component.html',
  styleUrls: ['./shooping.component.scss']
})
export class ShoopingComponent {

  public shopping$ = this.store.select(selectShopping);
  public productCounts: ProductShoppingModel[] = []; 
  public totalPrice:number=0

  constructor(private store: Store<any>) {
    this.shopping$.subscribe((products: ProductShoppingModel[]) => {
      this.countProducts(products);
    });
  }

  countProducts(products: ProductShoppingModel[]) {
    this.productCounts = []; 

    products.forEach(product => {
      const title = product.title;
      const price = product.price;
      const id = product.id
      
      const existingProduct = this.productCounts.find(p => p.title === title);

      if (!existingProduct) {
        this.productCounts.push({ id, title, count: 1, price });
      } else {
        existingProduct.count++;
      }
    });
  }

  getProductTitles(): string[] {
    return this.productCounts.map(product => product.title);
  }

  
  
}

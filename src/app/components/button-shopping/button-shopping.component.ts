import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { productsActions } from 'src/app/state/actions';
import { ProductModel } from 'src/app/models/productModel.interface';

@Component({
  selector: 'app-button-shopping',
  templateUrl: './button-shopping.component.html',
  styleUrls: ['./button-shopping.component.scss']
})
export class ButtonShoppingComponent {
  @Input() product!: ProductModel; // Declarar propiedad de entrada para el producto

  constructor(private store: Store<any>) {}

  addToShopping(): void {
    this.store.dispatch(productsActions.addProduct({ product: this.product }));
  }
}
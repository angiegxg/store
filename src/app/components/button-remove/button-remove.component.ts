import { Component, Input, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductModel } from 'src/app/models/productModel.interface';
import { ProductShoppingModel } from 'src/app/models/productShoppingModel.interface';
import { shoppingActions } from 'src/app/state/actions';

@Component({
  selector: 'app-button-remove',
  templateUrl: './button-remove.component.html',
  styleUrls: ['../button-shopping/button-shopping.component.scss']
})
export class ButtonRemoveComponent {
@ Input()product!:ProductShoppingModel
constructor(private store:Store<any>){}
removeToShopping(event: Event): void {
  event.stopPropagation()
  console.log(this.product)
  this.store.dispatch(shoppingActions.removeProduct({ product: this.product }));
}

}

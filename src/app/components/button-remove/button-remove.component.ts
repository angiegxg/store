// Importamos las dependencias necesarias de Angular.
import { Component, Input } from '@angular/core';
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
  @Input() product!: ProductShoppingModel; // Propiedad de entrada para recibir el producto a eliminar

  constructor(private store: Store<any>) {}

  // Método para eliminar un producto del carrito de compras.
  removeToShopping(event: Event): void {
    event.stopPropagation(); // Detiene la propagación del evento para evitar comportamientos no deseados.
    console.log(this.product); // Muestra el producto en la consola (para depuración).

    // Utiliza la acción 'shoppingActions.removeProduct' para eliminar el producto del carrito.
    this.store.dispatch(shoppingActions.removeProduct({ product: this.product }));
  }
}

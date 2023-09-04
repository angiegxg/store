// Importamos las dependencias necesarias de Angular.
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { productsActions } from 'src/app/state/actions';
import { ProductModel } from 'src/app/models/productModel.interface';
import { ProductShoppingModel } from 'src/app/models/productShoppingModel.interface';

@Component({
  selector: 'app-button-shopping',
  templateUrl: './button-shopping.component.html',
  styleUrls: ['./button-shopping.component.scss']
})
export class ButtonShoppingComponent {
  @Input() product!: ProductShoppingModel; // Declarar propiedad de entrada para el producto

  constructor(private store: Store<any>) {}

  // Método para agregar un producto al carrito de compras.
  addToShopping(event: Event): void {
    event.stopPropagation(); // Detiene la propagación del evento para evitar comportamientos no deseados.
    this.store.dispatch(productsActions.addProduct({ product: this.product }));
    // Utiliza la acción 'productsActions.addProduct' para agregar el producto al carrito.
  }
}

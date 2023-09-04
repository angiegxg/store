// Importamos las dependencias necesarias de Angular.
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductShoppingModel } from 'src/app/models/productShoppingModel.interface'; // Asegúrate de importar la interfaz correcta
import { payActions } from 'src/app/state/actions';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss'],
})
export class TotalComponent implements OnChanges {
  @Input() productCounts: ProductShoppingModel[] = [];

  total: number = 0;

  constructor(private store: Store) {}

  ngOnChanges(changes: SimpleChanges): void {
    // Detecta cambios en las propiedades de entrada, en este caso, 'productCounts'.
    if (changes['productCounts']) {
      // Cuando cambia 'productCounts', despachamos una acción para actualizar el precio total.
      this.store.dispatch(payActions.getTotalPrice({ total: this.total }));
    }
  }

  get totalPrice(): number {
    // Calcula el precio total sumando los precios de los productos en el carrito.
    this.total = Object.values(this.productCounts).reduce((acc, product) => {
      return acc + product.count * product.price;
    }, 0);

    // Asegura que el resultado tenga 2 decimales y lo devuelve.
    return parseFloat(this.total.toFixed(2));
  }
}

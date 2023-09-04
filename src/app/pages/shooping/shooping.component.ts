// Importamos las dependencias necesarias de Angular y ngrx/store.
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

  // Declaramos una variable 'shopping$' para almacenar un Observable del estado de compras.
  public shopping$ = this.store.select(selectShopping);

  // Declaramos una variable 'productCounts' para almacenar los productos contados en el carrito.
  public productCounts: ProductShoppingModel[] = [];

  // Declaramos una variable 'totalPrice' para almacenar el precio total de los productos en el carrito.
  public totalPrice: number = 0;

  constructor(private store: Store<any>) {
    // Suscribimos 'shopping$' para escuchar cambios en el estado de compras y contar los productos.
    this.shopping$.subscribe((products: ProductShoppingModel[]) => {
      this.countProducts(products);
    });
  }

  // Método para contar los productos en el carrito y calcular el precio total.
  countProducts(products: ProductShoppingModel[]) {
    this.productCounts = []; // Inicializamos el array de productos contados.

    products.forEach(product => {
      const title = product.title;
      const price = product.price;
      const id = product.id;

      // Buscamos si el producto ya existe en la lista de productos contados.
      const existingProduct = this.productCounts.find(p => p.title === title);

      if (!existingProduct) {
        // Si el producto no existe en la lista, lo agregamos con un contador de 1.
        this.productCounts.push({ id, title, count: 1, price });
      } else {
        // Si el producto ya existe, incrementamos su contador.
        existingProduct.count++;
      }
    });

    // Calculamos el precio total sumando los precios de todos los productos contados.
    this.totalPrice = this.productCounts.reduce((total, product) => total + (product.price * product.count), 0);
  }

  // Método para obtener los títulos de los productos en el carrito.
  getProductTitles(): string[] {
    return this.productCounts.map(product => product.title);
  }
}

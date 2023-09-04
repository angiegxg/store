import { Component, Input } from '@angular/core';
import { ProductCountShopping } from 'src/app/models/productCountModelShopping.interface';
import { ProductModel } from 'src/app/models/productModel.interface';
import { ProductShoppingModel } from 'src/app/models/productShoppingModel.interface';

@Component({
  selector: 'app-card-shopping',
  templateUrl: './card-shopping.component.html',
  styleUrls: ['./card-shopping.component.scss']
})
export class CardShoppingComponent {
  // Entrada (Input) que recibe un objeto ProductShoppingModel para mostrar los detalles del producto en el carrito
  @Input() product!: ProductShoppingModel;

  // Entrada (Input) que recibe el precio total de un producto en el carrito
  @Input() totalPrice!: number;
}

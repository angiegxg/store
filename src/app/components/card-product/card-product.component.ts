import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/productModel.interface';
import { Router } from '@angular/router';
import { ProductShoppingModel } from 'src/app/models/productShoppingModel.interface';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {
  // Entrada (Input) que recibe un objeto ProductModel para mostrar los detalles del producto
  @Input() product!: ProductModel;

  // Objeto que representa el producto en el carrito de compras (ProductShoppingModel)
  public productShopping!: ProductShoppingModel;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // En el método OnInit, inicializamos el objeto 'productShopping' con los datos del producto actual
    this.productShopping = {
      id: this.product.id,
      title: this.product.title,
      count: 0, // Inicializamos la cantidad en cero
      price: this.product.price
    };
  }

  // Método para ver los detalles de un producto
  viewProductDetails(): void {
    // Navegamos a la página de detalles del producto utilizando el Router
    this.router.navigate(['/detail/', this.product.id]);
  }
}

import { Component, Input } from '@angular/core';
import { ProductShoppingModel } from 'src/app/models/productShoppingModel.interface'; // Asegúrate de importar la interfaz correcta

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent {
  @Input() productCounts: ProductShoppingModel[] = []; // Cambia el tipo a un objeto

  get totalPrice(): number {
    return Object.values(this.productCounts).reduce((total, product) => {
      return total + (product.count * product.price);
    }, 0);
  }
}

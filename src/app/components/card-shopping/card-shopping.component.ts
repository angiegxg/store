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
  @Input() product!: ProductShoppingModel;
  @Input() totalPrice!: number;
}

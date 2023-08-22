import { Component, Input } from '@angular/core';
import { ProductModel } from 'src/app/models/productModel.interface';

@Component({
  selector: 'app-card-shopping',
  templateUrl: './card-shopping.component.html',
  styleUrls: ['./card-shopping.component.scss']
})
export class CardShoppingComponent {
  @Input() product!: ProductModel;

}

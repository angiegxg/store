import { Component, Input } from '@angular/core';
import { ProductModel } from 'src/app/models/productModel.interface';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent {
  @Input() product: ProductModel={
    id: 0,
    title:"",
    price:0,
    description:"",
    category:"",
    image: "",
    rating: {
      rate: 0,
      count:0
      
    }
   
  }
}

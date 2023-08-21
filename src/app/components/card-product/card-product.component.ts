import { Component, Input } from '@angular/core';
import { ProductModel } from 'src/app/models/productModel.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent {
  @Input() product!: ProductModel;

  constructor(private router: Router) {}

  viewProductDetails(): void {
    this.router.navigate(['/detail/', this.product.id]);
  }
  
}

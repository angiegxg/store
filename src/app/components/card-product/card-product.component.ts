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
  @Input() product!: ProductModel;
  public productShopping!: ProductShoppingModel;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.productShopping = {
      id: this.product.id,
      title: this.product.title,
      count: 0,
      price: this.product.price
    };
  }

  viewProductDetails(): void {
    this.router.navigate(['/detail/', this.product.id]);
  }
}

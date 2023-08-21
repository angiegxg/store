import { Component } from '@angular/core';
import { ProductModel } from 'src/app/models/productModel.interface';
import { ActivatedRoute } from '@angular/router';
import { GetProductByIdService } from 'src/app/services/get-product-by-id.service';

@Component({
  selector: 'app-datail',
  templateUrl: './datail.component.html',
  styleUrls: ['./datail.component.scss']
})
export class DatailComponent {
 public  product!: ProductModel;

  constructor(
    private route: ActivatedRoute,
    private productService: GetProductByIdService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('productId');
    if (productId) {
      this.productService.getProductById(parseInt(productId)).subscribe({
        next: (product) => {
          this.product = product;
          console.log(this.product)
        },
        error: (error) => {
          console.error('Error al obtener el producto:', error);
        }
      });
    }
  }

}

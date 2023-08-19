import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/productModel.interface';
import { map } from 'rxjs/operators';

@Injectable()
export class GetProductsService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Array<ProductModel>> {
    return this.http.get<ProductModel[]>('https://fakestoreapi.com/products');
  }
}

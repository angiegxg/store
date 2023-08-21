import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/productModel.interface';

@Injectable({
  providedIn: 'root'
})
export class GetProductByIdService {

  constructor(private http: HttpClient) { }

  public getProductById(id:number): Observable<ProductModel> {
    return this.http.get<ProductModel>(`https://fakestoreapi.com/products/${id}`);
  }
}

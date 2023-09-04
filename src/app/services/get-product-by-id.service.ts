import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/productModel.interface';

@Injectable({
  providedIn: 'root'
})
export class GetProductByIdService {

  constructor(private http: HttpClient) { }

  // Método para obtener un producto por su ID desde una API externa
  public getProductById(id: number): Observable<ProductModel> {
    // Realizamos una solicitud HTTP GET a la URL de la API de productos ficticios con el ID especificado
    return this.http.get<ProductModel>(`https://fakestoreapi.com/products/${id}`);
  }
}

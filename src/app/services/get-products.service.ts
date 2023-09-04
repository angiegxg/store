import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/productModel.interface';
import { map } from 'rxjs/operators';

@Injectable()
export class GetProductsService {

  constructor(private http: HttpClient) { }

  // Método para obtener productos desde una API externa
  public getProducts(): Observable<Array<ProductModel>> {
    // Realizamos una solicitud HTTP GET a la URL de la API de productos ficticios
    return this.http.get<ProductModel[]>('https://fakestoreapi.com/products')
      .pipe(
        // Utilizamos el operador 'map' para transformar la respuesta de la solicitud
        map((response: ProductModel[]) => response)
      );
  }
}

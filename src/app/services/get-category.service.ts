// Importamos las dependencias necesarias de Angular.
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCategoryService {

  constructor(private http: HttpClient) { }

  // Este método se utiliza para obtener las categorías de productos desde una API externa.
  public getCategory(): Observable<string> {
    // Realizamos una solicitud HTTP GET a la URL de la API que proporciona las categorías.
    return this.http.get<string>('https://fakestoreapi.com/products/categories');
  }
}

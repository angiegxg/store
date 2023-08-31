import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCategoryService {

  constructor(private http: HttpClient) { }

  public getCategory(): Observable<String> {
    return this.http.get<String>('https://fakestoreapi.com/products/categories');
  }
}

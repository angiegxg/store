import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetProductsService } from 'src/app/services/get-products.service';
import { productsApi } from 'src/app/state/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<any>, private getProducts: GetProductsService) { }

  ngOnInit(): void {
    // Al iniciar el componente, obtenemos los productos utilizando el servicio 'GetProductsService'
    this.getProducts.getProducts().subscribe({
      next: (data) => {
        // Imprimimos los datos en la consola para depuración
        console.log(data);

        // Utilizamos la acción 'productsApi.loadProducts' para cargar los productos en el estado global
        // Esto permite que otros componentes y servicios accedan a la lista de productos
        this.store.dispatch(productsApi.loadProducts({ products: data }));
      },
      error: (error) => {
        // Manejo de errores en caso de que la solicitud no sea exitosa
        console.error('Error al obtener los Productos: ', error);
      }
    });
  }
}



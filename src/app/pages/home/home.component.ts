import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetProductsService } from 'src/app/services/get-products.service';
import { productsApi } from 'src/app/state/actions';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{


constructor( private store:Store<any>, private getProducts: GetProductsService){
 
}
ngOnInit(): void {
  this.getProducts.getProducts().subscribe({
    next:(data)=>{
      console.log(data)
      this.store.dispatch(productsApi.loadProducts({products: data}))
      
    },
    error: (error) => {
      console.error('Error al obtener los lugares:', error);
    }
  })
  
}

}

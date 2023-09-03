import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductShoppingModel } from 'src/app/models/productShoppingModel.interface'; // Asegúrate de importar la interfaz correcta
import { payActions } from 'src/app/state/actions';


@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss'],
  
})
export class TotalComponent implements OnChanges {
  @Input() productCounts: ProductShoppingModel[] = [];

  total:number=0

  constructor(private store:Store){}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['productCounts']) {
      this.store.dispatch(payActions.getTotalPrice({ total: this.total }));
    }
  }
  get totalPrice(): number {
    this.total = Object.values(this.productCounts).reduce((acc, product) => {
      return acc + (product.count * product.price);
    }, 0);
   
    
 
    return parseFloat(this.total.toFixed(2)); 
  }
  



}

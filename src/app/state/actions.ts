import { createActionGroup, props } from '@ngrx/store';
import { ProductModel } from '../models/productModel.interface';

export const productsApi= createActionGroup({
  source:'Api',
  events:{
    'Load Products': props<{products: Array<ProductModel>}>(),
  }  
})

export const productsActions= createActionGroup({
    source: 'CardList',
    events:{
        'Add Product': props<{product: ProductModel}>(),
        'Plus Counter':props<{counter:number}>()
    }

})

export const shoppingActions= createActionGroup({
    source: 'Shopping',
    events:{
        'Remove Product': props<{product: ProductModel}>(),
        'Minus Coubter':props<{counter:number}>()
        
    }

})



import { createActionGroup, props } from '@ngrx/store';
import { ProductModel } from '../models/productModel.interface';
import { ProductShoppingModel } from '../models/productShoppingModel.interface';

export const productsApi= createActionGroup({
  source:'Api',
  events:{
    'Load Products': props<{products: Array<ProductModel>}>(),
  }  
})

export const productsActions= createActionGroup({
    source: 'CardList',
    events:{
        'Add Product': props<{product: ProductShoppingModel}>(),
        'Plus Counter':props<{counter:number}>(),
        'Filter for Categories': props<{category:string}>()
    }

})

export const shoppingActions= createActionGroup({
    source: 'Shopping',
    events:{
        'Remove Product': props<{product: ProductShoppingModel}>(),
        'Minus Coubter':props<{counter:number}>()
        
    }

})

export const payActions= createActionGroup({
  source:'pay',
  events:{
    'getTotalPrice':props<{total:number}>()
  }
})



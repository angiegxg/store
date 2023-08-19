import { StateModel } from "../models/stateModel.interface";
import { createReducer, on } from '@ngrx/store';
import { productsApi, productsActions, shoppingActions } from "./actions";


const initialState:StateModel={
    store:[],
    filter:[],
    shopping:[],
    counter:0
}

export const productReduceder= createReducer(
    initialState,

    on(productsApi.loadProducts, (state, action) => {
      
        return {
          ...state,
          store:action.products,
          filter:action.products
        };
      }),
      on(productsActions.addProduct, (state, action)=>{
        return{
            ...state,
            shopping: [...state.shopping, action.product],
            counter:state.shopping.length+1
        }
      })
    
)
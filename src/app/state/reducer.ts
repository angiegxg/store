import { StateModel } from "../models/stateModel.interface";
import { createReducer, on } from '@ngrx/store';
import { productsApi, productsActions, shoppingActions } from "./actions";
import { ProductModel } from "../models/productModel.interface";
import { ProductShoppingModel } from "../models/productShoppingModel.interface";


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
      }),
      on(shoppingActions.removeProduct, (state, action)=>{
        
        return{
          ...state,
          shopping: state.shopping.filter((product:ProductShoppingModel)=> product.id !== action.product.id),
          counter:state.shopping.length-1
        }
      }),

      on(productsActions.filterForCategories, (state, action)=>{
        if (action.category === "All"){
          return{
            ...state,
            filter: state.store
          } 
        } else{ 
          return{
            ...state,
            filter: state.store.filter((product:ProductModel)=> product.category === action.category)
          }
        }
        
      }),
      
)
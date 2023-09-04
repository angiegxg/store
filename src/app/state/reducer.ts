import { StateModel } from "../models/stateModel.interface";
import { createReducer, on } from '@ngrx/store';
import { productsApi, productsActions, shoppingActions, payActions } from "./actions";
import { ProductModel } from "../models/productModel.interface";
import { ProductShoppingModel } from "../models/productShoppingModel.interface";

// Estado inicial de la aplicación
const initialState: StateModel = {
    store: [],       // Lista de productos disponibles en la tienda
    filter: [],      // Lista de productos filtrados por categoría
    shopping: [],    // Lista de productos en el carrito de compras
    counter: 0,      // Contador de productos en el carrito
    total: 0         // Precio total de los productos en el carrito
}

// Reducer de productos
export const productReducer = createReducer(
    initialState,

    // Acción para cargar productos desde una API externa
    on(productsApi.loadProducts, (state, action) => {
        // Actualizamos el estado con la lista de productos cargados y sin filtros
        return {
            ...state,
            store: action.products,
            filter: action.products
        };
    }),

    // Acción para agregar un producto al carrito de compras
    on(productsActions.addProduct, (state, action) => {
        // Agregamos el nuevo producto al carrito y actualizamos el contador
        return {
            ...state,
            shopping: [...state.shopping, action.product],
            counter: state.shopping.length + 1
        }
    }),

    // Acción para eliminar un producto del carrito de compras
    on(shoppingActions.removeProduct, (state, action) => {
        // Filtramos los productos para eliminar el que coincida con el ID del producto a eliminar y actualizamos el contador
        return {
            ...state,
            shopping: state.shopping.filter((product: ProductShoppingModel) => product.id !== action.product.id),
            counter: state.shopping.length - 1
        }
    }),

    // Acción para aplicar un filtro de productos por categoría
    on(productsActions.filterForCategories, (state, action) => {
        if (action.category === "All") {
            // Si la categoría es "All", mostramos todos los productos sin filtro
            return {
                ...state,
                filter: state.store
            }
        } else {
            // Filtramos los productos por la categoría especificada
            return {
                ...state,
                filter: state.store.filter((product: ProductModel) => product.category === action.category)
            }
        }
    }),

    // Acción para obtener el precio total de los productos en el carrito
    on(payActions.getTotalPrice, (state, action) => {
        // Actualizamos el precio total en el estado
        console.log(action.total); // Puedes utilizar esta línea para depurar o imprimir el precio total
        return {
            ...state,
            total: action.total
        }
    })
);

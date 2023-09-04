import { createSelector, createFeatureSelector } from '@ngrx/store';
import { StateModel } from '../models/stateModel.interface';

// Selector para obtener el estado de productos
export const selectProductsState = createFeatureSelector<StateModel>('productsState');

// Selectores para acceder a propiedades específicas del estado
export const selectStore = createSelector(
    selectProductsState,
    (state) => state.store
);

export const selectShopping = createSelector(
    selectProductsState,
    (state) => state.shopping
);

export const selectFilter = createSelector(
    selectProductsState,
    (state) => state.filter
);

export const selectCounter = createSelector(
    selectProductsState,
    (state) => state.counter
);

export const selectTotal = createSelector(
    selectProductsState,
    (state) => state.total
);





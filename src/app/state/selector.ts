import { createSelector, createFeatureSelector } from '@ngrx/store';
import { StateModel } from '../models/stateModel.interface';

export const selectProductsState = createFeatureSelector<StateModel>('productsState')

export const selectStore= createSelector(
    selectProductsState,
    (state)=>state.store
)

export const selectShopping= createSelector(
    selectProductsState,
    (state)=>state.shopping
)

export const selectFilter= createSelector(
    selectProductsState,
    (state)=>state.filter
)

export const selectCounter= createSelector(
    selectProductsState,
    (state)=>state.counter
)

export const selectTotal= createSelector(
    selectProductsState,
    (state)=>state.total
)



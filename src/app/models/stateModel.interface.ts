import { ProductModel } from "./productModel.interface";

export interface StateModel{
    store: ProductModel[],
    filter: ProductModel[],
    shopping: ProductModel[],
    counter: number
}
import { ProductModel } from "./productModel.interface";
import { ProductShoppingModel } from "./productShoppingModel.interface";

export interface StateModel{
    store: ProductModel[],
    filter: ProductModel[],
    shopping: ProductShoppingModel[],
    counter: number
    total:number
}
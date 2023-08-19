import { RatingModel } from "./ratingModel.interface";

export interface ProductModel{
    id: number,
    title:string,
    price:number,
    description:string,
    category:string,
    image: string,
    rating: RatingModel
   
}
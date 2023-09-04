import { RatingModel } from "./ratingModel.interface";
import { Injectable } from '@angular/core';


export interface ProductModel{
    id: number,
    title:string,
    price:number,
    description:string,
    category:string,
    image: string,
    rating: RatingModel
   
}
export enum SortByEnum {
    NAME = "name",
    CREATEDAT = "createdAt",
}

export interface Product {
    _id?: string | undefined;
    name: string;
    description?: string;
    price: number
    createdAt: number;
    imgUrl?: string
}


export class CreateProduct {
    name = ""
    description = ""
    price = 0
    imgUrl = ""
    constructor(name: string, description: string, price: number) {
        this.name = name
        this.description = description
        this.price = price
        this.imgUrl = "placeholder.jpg"
    }
}

export interface QueryOpts {
    query?: string
    sortBy?: SortByEnum,
    page?: number
}
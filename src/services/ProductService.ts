import axios from "axios"
import { Product, QueryOpts } from "../models";

export const ProductService = { getProducts, getTotalProductsLength, getProductById, updateProduct, deleteProduct, createProduct }

const API = "http://localhost:3030/api/product"

async function getProducts({ query, sortBy, page }: QueryOpts) {
    try {
        const response = await axios.get(API, {
            params: {
                query,
                sortBy,
                page
            },
        })
        return response.data
    } catch (err) {
        throw err;
    }
}

async function getTotalProductsLength() {
    try {
        const { data } = await axios.get(API + "/length")
        return data
    } catch (err) {
        console.log(err)
    }
}

async function getProductById(id: string) {
    try {
        const { data } = await axios.get(`${API}/${id}`)
        return data
    } catch (err) {
        console.log(err)
    }
}

async function updateProduct(id: string, updatedProduct: Product) {
    try {
        const { data } = await axios.put(`${API}/${id}`, updatedProduct)
        return data
    } catch (err) {
        console.log(err)
    }
}

async function deleteProduct(id: string) {
    try {
        const { data } = await axios.delete(`${API}/${id}`)
        return data
    } catch (err) {
        console.log(err)
    }
}

async function createProduct(product: { name: string, description: string, price: number }) {
    try {
        const { data } = await axios.post(API, product)
        return data
    } catch (err) {
        console.log(err)
    }
}
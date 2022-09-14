import { ICart, IUser } from './../types/types';
import axios from "axios";

const shopWebApi = axios.create({
    baseURL: 'https://fakestoreapi.com'
})

export const getAllProducts = async () => {
    return await shopWebApi.get('/products')
}

export const getCategories = async () => {
    return await shopWebApi.get('/products/categories')
}

export const getCategoryCards = async (category:string) => {
    return await shopWebApi.get(`/products/category/${category}`)
}

export const getProductById = async (id:number) => {
    return await shopWebApi.get(`/products/${id}`)
}

export const fetchUsers = async () => {
    return await shopWebApi.get('/users')
}

export const SignUp = async (values: Record<string, any>) => {
    return await shopWebApi.post('/users',values)
}

export const logIn = async (values: Record<string, any>) => {
    return await shopWebApi.post('/auth/login',values)
}

export const sortCardsBySelect = async (category:string,sort?:string) => {
    return await shopWebApi.get(`/products/category/${category}?sort=${sort}`)
}

export const updateUser = async (value:IUser,id:number) => {
    return await shopWebApi.patch(`/users/${id}`,value)
}

export const getAllCarts = async () => {
    return await shopWebApi.get(`/carts`)
}

export const getUserCart = async (id:number) => {
    return await shopWebApi.get(`/carts/user/${id}`)
}

export const addNewCart = async (values:Record<string,any>) => {
    return await shopWebApi.post('/carts',values)
}

export const updateCart = async (values:ICart) => {
    return await shopWebApi.patch(`carts/${values.id}`)
}
import { ADD_GOOD_TO_CART, DELETE_GOOD_FROM_CART } from "../action-types"


export const addToCart=(obj)=>{
    return{
        type:ADD_GOOD_TO_CART,
        payload:obj
    }
}

export const deleteFromCart=(id)=>{
    return{
        type:DELETE_GOOD_FROM_CART,
        payload:id
    }
}
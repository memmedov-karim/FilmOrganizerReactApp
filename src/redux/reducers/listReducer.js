

import { ADD_GOOD_TO_CART, DELETE_GOOD_FROM_CART } from "../action-types";

const initialState = []



export const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_GOOD_TO_CART:
            if (!(state.find(item =>
                item.imdbID === action.payload.imdbID))) {
                    return [
                        ...state, action.payload
                    ]
            }
            break;
        case DELETE_GOOD_FROM_CART:
            return state.filter(item=>item.imdbID !== action.payload)
        default: return state
    }
}
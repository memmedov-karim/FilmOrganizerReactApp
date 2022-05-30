import { ERROR, LOAD, SUCCESS } from "../action-types"

const initialState = {
    loading: false,
    data: [],
    error: ''
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            return {
                ...state, loading: true
            }
        case SUCCESS:
            return {
                ...state, loading: false, data: action.payload
            }
        case ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state
    }
}

export default dataReducer
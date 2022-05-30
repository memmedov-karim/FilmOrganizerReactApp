
import { combineReducers } from "redux";
import apidenGelenDataReducer from "./apiInfo";
import dataReducer from "./dataReducer";
import { listReducer } from "./listReducer";

const rootReducer = combineReducers({
    data:dataReducer,
    card:listReducer,
    api:apidenGelenDataReducer
})


export default rootReducer
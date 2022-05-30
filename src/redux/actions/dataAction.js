import axios from "axios"
import { LOAD, SUCCESS } from "../action-types"

export const getData = (text) =>{
    return async (dispatch)=>{
        try {
            dispatch({
                type:LOAD
            })
    
            let { data } = await axios.get(`http://www.omdbapi.com/?s=${text}&apikey=763309b2`)
            
            dispatch({
                type:SUCCESS,
                payload: data.Search
            })
        } catch (error) {
            console.log("erioreoir")
        }
    }
}
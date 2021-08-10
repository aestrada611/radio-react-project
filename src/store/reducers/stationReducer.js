import { CHANGE_STATION } from "../types/stationTypes"


const initialState = {
    station: 93.3
}


 const myReducer =  ( state = initialState, action ) => { 
    switch (action.type) {
        case CHANGE_STATION:
            return {
                ...state,
                station: action.payload,
            };
        default:
            return state;
		}
 }

export default myReducer;
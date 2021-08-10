import { CHANGE_STATION } from "../types/stationTypes"

export const changeStation = ( frequency ) => ( dispatch ) => {
    dispatch( {
        type: CHANGE_STATION,
        payload: frequency
    })
}

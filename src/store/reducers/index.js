import { combineReducers } from 'redux'
import stationReducer from './stationReducer'

export default combineReducers({
	station: stationReducer,
})

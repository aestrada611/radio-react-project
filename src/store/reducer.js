const initialState = {
	station: 93.3,
}

const reducer = (state = initialState, action) => {
	// const newState = {...state};
	if (action.type === 'change station up') {
		return { station: state.station + 0.2 }
	} else if (action.type === 'change station down') {
		return { station: state.station - 0.2 }
	} else {
		return state
	}
}

export default reducer

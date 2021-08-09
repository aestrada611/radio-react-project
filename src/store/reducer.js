const initialState = {
    station: 93.3,
}


const reducer = (state = initialState, action) => {
    // const newState = {...state};
   if(action.type === 'change station'){
       return state + 0.2
   } else {
                return state;
    }
    
}



export default reducer;
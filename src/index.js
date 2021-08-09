import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Panel from './draggable-panel';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const initialState = {
    value: 5,
    station: 93.3,
}

function reducer(state = initialState, action) {
    const newState = {...state}
    switch(action.type) {
        // case "change station":
        // return {
        //     //here we would have the funvtion to change the station
        //     newState= state.value

        // }
        case "change volume":
            return{
                value: state.value,
                station: state.station
            }
            default:
                return state;
    }
    
}

// function reducer(state = initialState, action) {
//     switch(action.type) {
//         case "change station":
//         return {
//             ...state,
//             station: action.payload

//         }
//         case "change volume":
//             return{
//                 ...state,
//                 value: action.payload
//             }
//             default:
//                 return state;
//     }
    
// }
const store = createStore(reducer);

function Header(props) {
    return(
        <div style={{backgroundColor: '#7950C7', width: '100%', position: 'absolute', height: 'auto'}}>
                <h1>
                    <span style ={{textAlign: 'left'}}>Icon</span>
                    <span style={{textAlign: 'center'}}></span>AVID FM Radio</h1>
        </div>
    )
}

function Footer(props) {
    return(
        <div>
            <h1 style={{backgroundColor: "orange", textAlign: 'center', width: '100%', bottom: 0, height: 'auto', left: 0, paddingBottom: '10px', margin: '0px'}}>Hello World</h1>
            {/* the view height here is related to the one for the view height of the body div on line 63 */}
        </div>
    )
}


class HomeView extends React.Component{
  
    //think of better name for key but will handle if sation will change up or down
    //the first condition checks if my station is within range
    handleStationChange(station, key) {
        if (station < 87.9 || station > 107.9) {
            return
        } else {
            if (key === "up"){
                
            } else {
                //here would be the logic for setting the station
            }
        }
    }
    
    render(){
        return(
            <div style={{minHeight: '100%', position: 'relative'}}>
                <Header/>
                    <div
                    style={{
                        display: "flex",
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignContent: 'center',
                        minHeight: '100vh',
                        width: '100%',
                        // height: '80vh', 
                        margin: 0,
                        // paddingTop: "202px"
                        // marginTop: '30px',
                        // minHeight: '100%',
                        backgroundColor: '#212121'
                    }}
                    >
                        <Panel/>
                    </div>
                
                <Footer style={{backgroundColor: "orange", textAlign: 'center', width: '100%', position: 'absolute', bottom: 0, height: 'auto', left: 0}}/>
            </div>
        );
    }
}

////////////////////////


ReactDOM.render(
    <Provider store={store}>
    <HomeView />
    </Provider>
    ,
    document.getElementById('root')
  );
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Panel from './draggable-panel'



function Header(props) {
    return(
        <div style={{backgroundColor: '#7950C7', textAlign: 'center', width: '100%', position: 'absolute', height: "10vh"}}>
                <h1
                style={{textAlign: 'center'}}
                >AVID FM Radio</h1>
        </div>
    )
}

function Footer(props) {
    return(
        <div>
            <h1 style={{backgroundColor: "white", textAlign: 'center', width: '100%', position: 'absolute', height: "10vh", bottom: '0'}}>Hello World</h1>
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
            <>
                <Header/>
                    <div
                    style={{
                        display: "flex",
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        minHeight: '80vh',
                        width: '100%', 
                        paddingTop: "202px"
                        // marginTop: '30px',
                        // minHeight: '100%',
                    }}
                    >
                        <Panel/>
                    </div>
                
                <Footer/>
            </>
        );
    }
}

////////////////////////


ReactDOM.render(
    <HomeView />,
    document.getElementById('root')
  );
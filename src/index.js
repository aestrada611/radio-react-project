import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Slider, Card} from '@material-ui/core';
import Draggable from 'react-draggable';
// import {Menu} from '@material-ui/icons';
import {Knob} from 'react-rotary-knob';
import * as skins from 'react-rotary-knob-skin-pack';



const knobStyle = {
    width: "150px",
    height: "150px"
}

function Header(props) {
    return(
        <div style={{flexGrow: 1, backgroundColor: '#7950C7'}}>
                <h1
                style={{textAlign: 'center'}}
                >AVID FM Radio</h1>
        </div>
    )
}

function Footer(props) {
    return(
        <div>
            <h1 style={{backgroundColor: "white", textAlign: 'center', width: '100%', position: 'absolute', height: "10vh"}}>Hello World</h1>
            {/* the view height here is related to the one for the view height of the body div on line 63 */}
        </div>
    )
}


class HomeView extends React.Component{
    state= {
        value: 5
    }
    changeVolume(volume) {
        this.setState({value:volume})
    }
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
                }}
                >
                    <Draggable>
                        <div>

                            <Card
                            style={{maxWidth: 300, minHeight: '300px', borderColor: '#7950C7', borderWidth: '3px', backgroundColor: 'rgb(66, 66, 66)'}}
                            variant='outlined'
                            >
                                <p>radio.station</p>
                            </Card>
                    </div>
                    </Draggable>
                    <Draggable>
                        <div>
                            <Card
                            style={{maxWidth: 300, padding: '50px', borderColor: '#7950C7', borderWidth: '3px', backgroundColor: 'rgb(66, 66, 66)'}}
                            variant='outlined'
                            >
                            <Slider
                                defaultValue={5}
                                valueLabelDisplay="on"
                                step={1}
                                marks
                                min={0}
                                max={10}
                                />
                                <br/>
                                <Knob
                                onChange={this.changeVolume.bind(this)}
                                min={0}
                                max={10}
                                value={this.state.value}
                                skin={skins.s12}
                                style={knobStyle}
                                />
                            </Card>
                        </div>
                    </Draggable>
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
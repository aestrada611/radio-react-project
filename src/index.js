import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Slider, Card, AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';
import Draggable from 'react-draggable';
import {Menu} from '@material-ui/icons';
import {Knob} from 'react-rotary-knob';
import * as skins from 'react-rotary-knob-skin-pack';



const knobStyle = {
    width: "150px",
    height: "150px"
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
            <div style={{flexGrow: 1, backgroundColor: '#7950C7', top: -5}}>
                <h1
                style={{textAlign: 'center'}}
                >AVID FM Radio</h1>
            </div>
            <div
            style={{
                display: "flex",
                flexDirection: 'row',
                justifyContent: 'space-evenly'
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
                </Draggable>
            </div>
         </>
        );
    }
}

////////////////////////


ReactDOM.render(
    <HomeView />,
    document.getElementById('root')
  );
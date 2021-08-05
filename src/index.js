import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Slider, Card, AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';
import Draggable from 'react-draggable';
import {Menu} from '@material-ui/icons';


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
            <div style={{flexGrow: 1, backgroundColor: 'purple', positon: "sticky", top: -5}}>
                <h1
                style={{textAlign: 'center'}}
                >AVID FM Radio</h1>


            {/* <AppBar
            position="static"
            // style={{backgroundColor: 'red'}}
            disableGutters= {false}
            >
                <Toolbar
                disableGutters= {true}
                style={{backgroundColor: 'red', paddingTop: '10px', marginTop: '10px', position: 0}}
                >
                    <IconButton>
                        <Menu/>
                    </IconButton>
                    <IconButton>
                        <Typography>Yeet</Typography>
                    </IconButton>
                </Toolbar>
                </AppBar> */}
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
                        style={{maxWidth: 300, minHeight: '300px'}}
                        >
                                <p>hello people</p>
                        </Card>
                </div>
                </Draggable>
                <Draggable>
                    <Card
                    style={{maxWidth: 300, padding: '50px'}}
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
                        <p>this is where the hz adjuster would be</p>
                    </Card>
                </Draggable>
            </div>
         </>
        );
    }
}

const header = {
    color: 'red',
};



////////////////////////


ReactDOM.render(
    <HomeView />,
    document.getElementById('root')
  );
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Box, Container, Grid, CardHeader, Slider} from '@material-ui/core'

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
            {/* <Container> */}

            <CardHeader/>

            <Grid
            container
            // direction="row"
            // justifyContent="space-between"
            // alignItems="center"
            >
            <Grid 
            item xs={6}
            zeroMinWidth
            >
                <Box>
                    <p>Hello World</p>
                </Box>
            </Grid>
             <Grid 
             zeroMinWidth
             item xs={6}
             >  <Slider
             defaultValue={5}
             valueLabelDisplay="on"
             step={1}
             marks
             min={0}
             max={10}
             />
            </Grid>
            </Grid>
            {/* </Container> */}
         </>
        );
    }
}








////////////////////////


ReactDOM.render(
    <HomeView />,
    document.getElementById('root')
  );
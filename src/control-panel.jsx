import React, { useState } from 'react'
import { Card, Slider } from '@material-ui/core'
import { Knob } from 'react-rotary-knob'
import * as skins from 'react-rotary-knob-skin-pack'
import { useDispatch } from 'react-redux'
import { changeStation } from './store/actions/stationAction'
import { useSelector } from 'react-redux'

const knobStyle = {
	width: '100px',
	height: '100px',
}

function ControlPanel() {
	const dispatch = useDispatch()
	const currentStation = useSelector((state) => state.station.station)
	// const [val, setVal] = useState('')
	return (
		<Card
			style={{
				minWidth: '50vh',
				minHeight: '50vh',
				borderColor: 'clear',
				borderWidth: '3px',
				backgroundColor: 'rgb(66, 66, 66)',
				boxShadow: '10px 10px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-evenly',
				alignItems: 'center',
				borderRadius: '25px',
			}}
			variant='outlined'
		>
			<Slider
				onChange={(e, val) => dispatch(changeStation(val))}
				// defaultValue={getState()}
				defaultValue={currentStation}
				valueLabelDisplay='on'
				step={0.2}
				marks
				min={87.9}
				max={107.9}
				track={false}
				style={{ marginTop: '40px', maxWidth: '90%', color: 'orangered' }}
			/>
			<Knob
				// onChange={this.changeVolume.bind(this)}
				min={0}
				max={10}
				skin={skins.s10}
				style={knobStyle}
			/>
		</Card>
	)
}

// const mapStateToProps = (state) => ({
// 	station: state.station,
// })

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		handleStationChange: () => dispatch({ type: 'change station up' }),
// 	}
// }

export default ControlPanel

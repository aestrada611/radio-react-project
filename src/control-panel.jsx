import React from 'react'
import { Card, Slider } from '@material-ui/core'
import { Knob } from 'react-rotary-knob'
import * as skins from 'react-rotary-knob-skin-pack'
import { useDispatch } from 'react-redux'
import { changeStation } from './store/actions/stationAction'
import { useSelector } from 'react-redux'

const knobStyle = {
	width: '12em',
	height: '12em',
}

const cardStyle = {
	width: '25em',
	height: '25em',
	borderColor: 'clear',
	borderWidth: '3px',
	backgroundColor: 'rgb(66, 66, 66)',
	boxShadow: '10px 10px',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-evenly',
	alignItems: 'center',
	borderRadius: '25px',
}

function ControlPanel() {
	const dispatch = useDispatch()
	const currentStation = useSelector((state) => state.station.station)
	return (
		<Card style={cardStyle} variant='outlined'>
			<Slider
				onChange={(e, val) => dispatch(changeStation(val))}
				value={currentStation}
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

export default ControlPanel

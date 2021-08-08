import React from 'react'
import { Slider, Card } from '@material-ui/core'
import { Knob } from 'react-rotary-knob'
import * as skins from 'react-rotary-knob-skin-pack'

const knobStyle = {
	width: '150px',
	height: '150px',
}

export default class ControlPanel extends React.Component {
	state = {
		value: 5,
	}
	changeVolume(volume) {
		this.setState({ value: volume })
	}
	render() {
		return (
			<Card
				style={{
					// maxWidth: 300,
					padding: '50px',
					borderColor: '#7950C7',
					borderWidth: '3px',
					backgroundColor: 'rgb(66, 66, 66)',
				}}
				variant='outlined'
			>
				<Slider
					defaultValue={5}
					valueLabelDisplay='on'
					step={1}
					marks
					min={0}
					max={10}
				/>
				<br />
				<Knob
					onChange={this.changeVolume.bind(this)}
					min={0}
					max={10}
					value={this.state.value}
					skin={skins.s12}
					style={knobStyle}
				/>
			</Card>
		)
	}
}

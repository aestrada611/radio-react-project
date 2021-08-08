import React from 'react'
import { Slider, Card } from '@material-ui/core'
import { Knob } from 'react-rotary-knob'
import * as skins from 'react-rotary-knob-skin-pack'
import { connect } from 'react-redux'

const knobStyle = {
	width: '150px',
	height: '150px',
}

class ControlPanel extends React.Component {
	state = {
		value: 5,
		station: 93.3,
	}
	changeVolume(volume) {
		this.setState({ value: volume })
	}

	handleStationChange(station) {
		this.setState({ station: station })
	}

	render() {
		return (
			<div>
				<Card
					style={{
						minWidth: '45%',
						padding: '50px',
						borderColor: '#7950C7',
						borderWidth: '3px',
						backgroundColor: 'rgb(66, 66, 66)',
					}}
					variant='outlined'
				>
					<Slider
						onChange={this.handleStationChange.bind(this)}
						defaultValue={this.props.station}
						valueLabelDisplay='on'
						step={0.2}
						marks
						min={87.9}
						max={107.9}
						track='off'
					/>
					<br />
					<Knob
						onChange={this.changeVolume.bind(this)}
						min={0}
						max={10}
						value={this.props.value}
						skin={skins.s12}
						style={knobStyle}
					/>
				</Card>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	value: state.value,
	station: state.station,
})

// export { ControlPanel, connect(mapsStateToProps)(Station)}

export default connect(mapStateToProps)(ControlPanel)

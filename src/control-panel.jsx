import React from 'react'
import { Slider, Card } from '@material-ui/core'
import { Knob } from 'react-rotary-knob'
import * as skins from 'react-rotary-knob-skin-pack'
import { connect } from 'react-redux'

const knobStyle = {
	width: '100px',
	height: '100px',
}

class ControlPanel extends React.Component {
	state = {
		value: 5,
	}
	changeVolume(value) {
		this.setState({ value: value })
	}

	render() {
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
					onChange={this.handleStationChange}
					defaultValue={this.props.station}
					valueLabelDisplay='on'
					step={0.2}
					marks
					min={87.9}
					max={107.9}
					track={false}
					style={{ marginTop: '40px', maxWidth: '90%' }}
				/>
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

const mapStateToProps = (state) => ({
	station: state.station,
})

const mapDispatchToProps = (dispatch) => {
	return {
		handleStationChange: () => dispatch({ type: 'change station' }),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel)

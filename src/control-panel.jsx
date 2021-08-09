import React from 'react'
import { Slider, Card } from '@material-ui/core'
import { Knob } from 'react-rotary-knob'
import * as skins from 'react-rotary-knob-skin-pack'
import { connect } from 'react-redux'
// import { useSelector } from 'react-redux'

const knobStyle = {
	width: '100px',
	height: '100px',
}

class ControlPanel extends React.Component {
	handleVolumeChange(value) {
		// this.setState({ value: value })
		this.props.dispatch({ type: 'change volume', payload: value })
	}

	handleStationChange(station) {
		// this.setState({ station: station })
		this.props.dispatch({ type: 'change station', payload: station })
	}

	render() {
		return (
			<Card
				style={{
					minWidth: '50vh',
					minHeight: '50vh',
					borderColor: '#7950C7',
					borderWidth: '3px',
					backgroundColor: 'rgb(66, 66, 66)',
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
				/>
				<br />
				<Knob
					onChange={this.handleVolumeChange}
					min={0}
					max={10}
					// value={this.props.value}
					skin={skins.s12}
					style={knobStyle}
				/>
			</Card>
		)
	}
}

const mapStateToProps = (state) => ({
	value: state.value,
	station: state.station,
})

const mapDispatchToProps = (dispatch) => {
	return {
		handleChange: () => dispatch({ type: 'change volume' }),
	}
}

// export { ControlPanel, connect(mapsStateToProps)(Station)}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel)

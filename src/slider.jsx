import React from 'react'
import './index.css'

export default class Slider extends React.Component {
	constructor(props) {
		super(props)
		this.state = { station: 93.3 }
	}

	handleStationUp() {
		const newValue = this.state.station + 0.2
		this.setState({ station: newValue })
	}

	handleStationDown() {
		const newValue = this.state.station - 0.2
		this.setState({ station: newValue })
	}

	updateState() {}

	render() {
		return (
			<div>
				<div>
					<input
						type='range'
						id='station'
						min='87.9'
						max='107.9'
						step='0.2'
						onChange={this.updateState}
						value={this.state.station}
					></input>
				</div>
				<div>
					<button onClick={this.handleStationUp}>Station Down</button>
					<button onClick={this.handleStationDown}>Station Up</button>
				</div>
			</div>
		)
	}
}

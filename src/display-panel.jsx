import React from 'react'
import { Slider, Card } from '@material-ui/core'

export default class ControlPanel extends React.Component {
	render() {
		return (
			// <div>
			<Card
				style={{
					// maxWidth: 300,
					minHeight: '300px',
					borderColor: '#7950C7',
					borderWidth: '3px',
					backgroundColor: 'rgb(66, 66, 66)',
				}}
				variant='outlined'
			>
				<p>radio.station</p>
			</Card>
			// </div>
		)
	}
}

import React from 'react'
import { Card } from '@material-ui/core'

export default class ControlPanel extends React.Component {
	render() {
		return (
			<div>
				<Card
					style={{
						minWidth: '45%',
						minHeight: '300px',
						borderColor: '#7950C7',
						borderWidth: '3px',
						backgroundColor: 'rgb(66, 66, 66)',
					}}
					variant='outlined'
				>
					fix for the dispaly panel would be using redux or lifting up state of
					number and be ablee to pass it down as props
					<p>radio.station</p>
				</Card>
			</div>
		)
	}
}

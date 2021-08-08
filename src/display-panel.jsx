import React from 'react'
import { Card } from '@material-ui/core'
import { useSelector } from 'react-redux'

export default function ControlPanel(props) {
	const currentStation = useSelector((state) => state.station)
	const currentVolume = useSelector((state) => state.value)
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
				<p>{currentStation}</p>
				<p>{currentVolume}</p>
			</Card>
		</div>
	)
}
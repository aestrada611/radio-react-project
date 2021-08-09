import React from 'react'
import { Card } from '@material-ui/core'
import { useSelector } from 'react-redux'

//will i have to subscribe in order to update sation and volume
export default function ControlPanel(props) {
	const currentStation = useSelector((state) => state.station)
	const currentVolume = useSelector((state) => state.value)
	return (
		<Card
			style={{
				// minWidth: '100%',
				minWidth: '50vh',
				minHeight: '50vh',
				// minHeight: '300px',
				borderColor: '#7950C7',
				borderWidth: '3px',
				backgroundColor: 'rgb(66, 66, 66)',
			}}
			variant='outlined'
		>
			<p>{currentStation}</p>
			<p>{currentVolume}</p>
		</Card>
	)
}

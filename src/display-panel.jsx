import React from 'react'
import { Card } from '@material-ui/core'
import { useSelector } from 'react-redux'

//will i have to subscribe in order to update sation and volume
export default function ControlPanel(props) {
	const currentStation = useSelector((state) => state.station)
	return (
		<Card
			style={{
				minWidth: '50vh',
				minHeight: '50vh',
				borderColor: 'clear',
				borderWidth: '3px',
				backgroundColor: 'rgb(66, 66, 66)',
				// textAlign: 'center',
				// display: 'flex',
				// justifyContent: 'center',
				// alignContent: 'center',
				boxShadow: '10px 10px',
				borderRadius: '25px',
			}}
			variant='outlined'
		>
			<div
				style={{
					textAlign: 'center',
					display: 'flex',
					justifyContent: 'center',
					minWidth: '100%',
					alignContent: 'center',
					height: '100%',
					backgroundColor: 'lightgray',
					borderRadius: '25px',
					marginTop: '10px',
				}}
			>
				<h1>{currentStation}</h1>
			</div>
			<br />
			<div>
				<ul>
					<li></li>
				</ul>
			</div>
		</Card>
	)
}

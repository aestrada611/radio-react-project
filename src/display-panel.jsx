import React from 'react'
import { Card } from '@material-ui/core'
import { useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'

//will i have to subscribe in order to update sation and volume

export default function ControlPanel(props) {
	const currentStation = useSelector((state) => state.station)
	const savedStations = [null, null, null, null, null, null]

	console.log(savedStations)

	return (
		<Card
			style={{
				minWidth: '50vh',
				minHeight: '50vh',
				borderColor: 'clear',
				borderWidth: '3px',
				backgroundColor: 'rgb(66, 66, 66)',
				// textAlign: 'center',
				display: 'flex',
				flexDirection: 'column',
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
			<div
				style={{
					display: 'flex',
					alignContent: 'center',
					justifyContent: 'center',
					paddingTop: '3vh',
				}}
			>
				<table>
					<tr>
						<td>
							<Button
								variant='outlined'
								style={{ color: 'orangered', borderColor: 'orangered' }}
								onClick={() => {
									let check = savedStations.filter((x) => x === currentStation)
									if (check.length >= 1) {
										return
									} else {
										savedStations[0] = currentStation
									}
									// savedStations.push(currentStation)
								}}
							>
								Save Station
							</Button>
						</td>
						<td>
							<Button
								variant='outlined'
								style={{ color: 'orangered', borderColor: 'orangered' }}
								onClick={() => {
									let check = savedStations.filter((x) => x === currentStation)
									if (check.length >= 1) {
										return
									} else {
										savedStations[1] = currentStation
									}
									// savedStations.push(currentStation)
								}}
							>
								Save Station
							</Button>
						</td>
					</tr>
					<tr>
						<td>
							<Button
								variant='outlined'
								style={{ color: 'orangered', borderColor: 'orangered' }}
								onClick={() => {
									let check = savedStations.filter((x) => x === currentStation)
									if (check.length >= 1) {
										return
									} else {
										savedStations[2] = currentStation
									}
									// savedStations.push(currentStation)
								}}
							>
								Save Station
							</Button>
						</td>
						<td>
							<Button
								variant='outlined'
								style={{ color: 'orangered', borderColor: 'orangered' }}
								onClick={() => {
									let check = savedStations.filter((x) => x === currentStation)
									if (check.length >= 1) {
										return
									} else {
										savedStations[3] = currentStation
									}
									// savedStations.push(currentStation)
								}}
							>
								Save Station
							</Button>
						</td>
					</tr>
					<tr>
						<td>
							<Button
								variant='outlined'
								style={{ color: 'orangered', borderColor: 'orangered' }}
								onClick={() => {
									let check = savedStations.filter((x) => x === currentStation)
									if (check.length >= 1) {
										return
									} else {
										savedStations[4] = currentStation
									}
									// savedStations.push(currentStation)
								}}
							>
								Save Station
							</Button>
						</td>
						<td>
							<Button
								variant='outlined'
								style={{ color: 'orangered', borderColor: 'orangered' }}
								onClick={() => {
									let check = savedStations.filter((x) => x === currentStation)
									console.log(savedStations)
									if (check.length >= 1) {
										return
									} else {
										savedStations[5] = currentStation
									}
								}}
							>
								Save Station
							</Button>
						</td>
					</tr>
				</table>
			</div>
		</Card>
	)
}

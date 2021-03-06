import React, { useState } from 'react'
import { Card } from '@material-ui/core'
import { useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'
import { changeStation } from './store/actions/stationAction'
import { useDispatch } from 'react-redux'

export default function ControlPanel(props) {
	const currentStation = useSelector((state) => state.station.station)
	const dispatch = useDispatch()

	console.log('current', currentStation)
	const savedStations = useState([null, null, null, null, null, null])

	const isStationSaved = useState([false, false, false, false, false, false])
	console.log(savedStations)

	const [, updateState] = useState()
	const forceUpdate = React.useCallback(() => updateState({}), [])

	const handleClick = (savedSlot) => {
		let checkDuplicate = savedStations[0].filter(
			(value) => value === currentStation
		)
		if (checkDuplicate.length >= 1) {
			return alert('This Station is already saved')
		} else {
			savedStations[0][savedSlot] = currentStation
			isStationSaved[0][savedSlot] = true
			forceUpdate()
		}
	}

	const handleStationChange = (savedSlot) => {
		dispatch(changeStation(savedStations[0][savedSlot]))
	}

	const saveButtonStyle = {
		color: 'orangered',
		borderColor: 'orangered',
	}

	const savedStationButtonStyle = {
		color: 'orangered',
		borderColor: 'orangered',
		minWidth: '131.19px',
	}

	const cardStyle = {
		width: '25em',
		height: '25em',
		borderColor: 'clear',
		borderWidth: '3px',
		backgroundColor: 'rgb(66, 66, 66)',
		display: 'flex',
		flexDirection: 'column',
		boxShadow: '10px 10px',
		borderRadius: '25px',
		justifyContent: 'center',
	}

	return (
		<Card style={cardStyle} variant='outlined'>
			<div
				style={{
					textAlign: 'center',
					display: 'flex',
					justifyContent: 'center',
					minWidth: '95%',
					alignContent: 'center',
					backgroundColor: 'lightgray',
					borderRadius: '25px',
					marginTop: '10px',
					alignSelf: 'center',
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
					padding: '1vh',
				}}
			>
				<table>
					<tr>
						<td>
							{isStationSaved[0][0] ? (
								<Button
									variant='outlined'
									style={savedStationButtonStyle}
									onClick={() => handleStationChange(0)}
								>
									{savedStations[0][0]}
								</Button>
							) : (
								<Button
									variant='outlined'
									style={saveButtonStyle}
									onClick={() => handleClick(0)}
								>
									Save Station
								</Button>
							)}
						</td>
						<td>
							{isStationSaved[0][1] ? (
								<Button
									variant='outlined'
									style={savedStationButtonStyle}
									onClick={() => handleStationChange(1)}
								>
									{savedStations[0][1]}
								</Button>
							) : (
								<Button
									variant='outlined'
									style={saveButtonStyle}
									onClick={() => handleClick(1)}
								>
									Save Station
								</Button>
							)}
						</td>
					</tr>
					<tr>
						<td>
							{isStationSaved[0][2] ? (
								<Button
									variant='outlined'
									style={savedStationButtonStyle}
									onClick={() => handleStationChange(2)}
								>
									{savedStations[0][2]}
								</Button>
							) : (
								<Button
									variant='outlined'
									style={saveButtonStyle}
									onClick={() => handleClick(2)}
								>
									Save Station
								</Button>
							)}
						</td>
						<td>
							{isStationSaved[0][3] ? (
								<Button
									variant='outlined'
									style={savedStationButtonStyle}
									onClick={() => handleStationChange(3)}
								>
									{savedStations[0][3]}
								</Button>
							) : (
								<Button
									variant='outlined'
									style={saveButtonStyle}
									onClick={() => handleClick(3)}
								>
									Save Station
								</Button>
							)}
						</td>
					</tr>
					<tr>
						<td>
							{isStationSaved[0][4] ? (
								<Button
									variant='outlined'
									style={savedStationButtonStyle}
									onClick={() => handleStationChange(4)}
								>
									{savedStations[0][4]}
								</Button>
							) : (
								<Button
									variant='outlined'
									style={saveButtonStyle}
									onClick={() => handleClick(4)}
								>
									Save Station
								</Button>
							)}
						</td>
						<td>
							{isStationSaved[0][5] ? (
								<Button
									variant='outlined'
									style={savedStationButtonStyle}
									onClick={() => handleStationChange(5)}
								>
									{savedStations[0][5]}
								</Button>
							) : (
								<Button
									variant='outlined'
									style={saveButtonStyle}
									onClick={() => handleClick(5)}
								>
									Save Station
								</Button>
							)}
						</td>
					</tr>
				</table>
			</div>
		</Card>
	)
}

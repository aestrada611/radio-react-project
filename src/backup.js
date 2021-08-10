import React, { useState } from 'react'
import { Card } from '@material-ui/core'
import { useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'

export default function ControlPanel(props) {
	const currentStation = useSelector((state) => state.station.station)
	const [savedStations, setSavedStations] = useState([])
	const handleClick = (num) => {
		const matchingValue = savedStations.find(
			(x) => x.currentStation === currentStation
		)
		const myStation = {
			id: num,
			currentStation,
		}
		if (!matchingValue) {
			setSavedStations((arr) => [...arr, myStation])
		} else {
			alert('station already saved')
		}
	}

	return (
		<Card
			style={{
				minWidth: '50vh',
				minHeight: '50vh',
				borderColor: 'clear',
				borderWidth: '3px',
				backgroundColor: 'rgb(66, 66, 66)',
				display: 'flex',
				flexDirection: 'column',
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
								onClick={() => handleClick(1)}
							>
								{savedStations.find((x) => x.currentStation === 1)}
							</Button>
						</td>
						<td>
							<Button
								variant='outlined'
								style={{ color: 'orangered', borderColor: 'orangered' }}
								onClick={() => handleClick(2)}
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
								onClick={() => handleClick(3)}
							>
								Save Station
							</Button>
						</td>
						<td>
							<Button
								variant='outlined'
								style={{ color: 'orangered', borderColor: 'orangered' }}
								onClick={() => handleClick(4)}
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
								onClick={() => handleClick(5)}
							>
								Save Station
							</Button>
						</td>
						<td>
							<Button
								variant='outlined'
								style={{ color: 'orangered', borderColor: 'orangered' }}
								onClick={() => handleClick(6)}
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

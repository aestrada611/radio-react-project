import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import ControlPanel from './control-panel'
import DisplayPanel from './display-panel'

const cP = {
	id: 'control panel',
	content: <ControlPanel />,
}
const dP = {
	id: 'display panel',
	content: <DisplayPanel />,
}

const reorder = (list, startIndex, endIndex) => {
	const result = Array.from(list)
	const [removed] = result.splice(startIndex, 1)
	result.splice(endIndex, 0, removed)
	return result
}

const getListStyle = (isDraggingOver) => ({
	// background: isDraggingOver ? 'lightblue' : 'lightgrey',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-evenly',
	// alignItems: 'center',
	flexWrap: 'wrap',
	alignContent: 'center',
	// flexDirection: 'column',
	transition: 'background-color 0.2s ease',
	backgroundColor: `${(props) => (props.isDraggingOver ? 'skyblue' : 'white')}`,
	flexGrow: '1',
	paddingTop: '100px',
})

const getItemStyle = (isDragging, draggableStyle) => ({
	// background: isDragging ? 'lightgreen' : 'grey',
	draggableStyle,
	// transition: 'background-color 0.2s ease',
	// display: 'flex',
	// justifyContent: 'center',
	// alingContent: 'center',
	padding: '10vh 0 0',
	...draggableStyle,
	// ...(isDragging && {
	// 	background: 'rgb(235,235,235',
	// }),
})

export default class Panel extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			items: [cP, dP],
		}
		this.onDragEnd = this.onDragEnd.bind(this)
	}

	onDragEnd(result) {
		if (!result.destination) {
			return
		}
		const items = reorder(
			this.state.items,
			result.source.index,
			result.destination.index
		)
		this.setState({
			items,
		})
	}

	render() {
		return (
			<div style={{ width: '100%', height: '100%' }}>
				<DragDropContext onDragEnd={this.onDragEnd}>
					<div
						style={{
							// display: 'flex',
							// flexDirection: 'column',
							// justifyContent: 'center',
							// alignItems: 'center',
							minWidth: '100%',
							minHeight: '100%',
							// flexWrap: 'wrap',
						}}
					>
						<Droppable
							droppableId='droppable'
							direction='horizontal'
							style={{ minWidth: '100%' }}
						>
							{(provided, snapshot) => (
								<div
									ref={provided.innerRef}
									style={getListStyle(snapshot.isDraggingOver)}
									{...provided.droppableProps}
									isDraggingOver={snapshot.isDraggingOver}
								>
									{this.state.items.map((item, index) => (
										<Draggable
											key={item.id}
											draggableId={item.id}
											index={index}
											// disableInteractiveElementBlocking
										>
											{(provided, snapshot) => (
												<div
													ref={provided.innerRef}
													{...provided.draggableProps}
													// {...provided.dragHandleProps}
													// isDragging={snapshot.isDragging}
													style={getItemStyle(
														snapshot.isDragging,
														provided.draggableProps.style
													)}
												>
													<div
														{...provided.dragHandleProps}
														style={{
															border: 'medium solid clear',
															backgroundColor: 'clear',
															width: '25%',
															borderRadius: '25px',
															textAlign: 'center',
															color: 'orangered',
														}}
													>
														Drag Me
													</div>
													{item.content}
													{/* <div
														style={{ width: '100%', backgroundColor: 'orange' }}
													></div> */}
												</div>
											)}
										</Draggable>
									))}
									{provided.placeholder}
								</div>
							)}
						</Droppable>
					</div>
				</DragDropContext>
			</div>
		)
	}
}

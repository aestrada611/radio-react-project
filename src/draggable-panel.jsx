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
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-evenly',
	flexWrap: 'wrap',
	alignContent: 'center',
	transition: 'background-color 0.2s ease',
	backgroundColor: `${(props) => (props.isDraggingOver ? 'skyblue' : 'white')}`,
	flexGrow: '1',
	paddingTop: '100px',
})

const getItemStyle = (isDragging, draggableStyle) => ({
	draggableStyle,
	padding: '10vh 0 0',
	...draggableStyle,
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
							minWidth: '100%',
							minHeight: '100%',
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
										>
											{(provided, snapshot) => (
												<div
													ref={provided.innerRef}
													{...provided.draggableProps}
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

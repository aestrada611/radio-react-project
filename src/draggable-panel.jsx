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
	background: isDraggingOver ? 'lightblue' : 'lightgrey',
	display: 'flex',
	// padding: 'grid',
	overflow: 'auto',
})

const getItemStyle = (isDragging, draggableStyle) => ({
	userSelect: 'none',
	background: isDragging ? 'lightgreen' : 'grey',
	draggableStyle,
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
			<DragDropContext>
				<Droppable droppableId='droppable' direction='horizontal'>
					{(provided, snapshot) => (
						<div
							ref={provided.innerRef}
							style={getListStyle(snapshot.isDraggingOver)}
							{...provided.droppableProps}
						>
							{this.state.items.map((item, index) => (
								<Draggable
									key={item.id}
									draggableId={item.id}
									index={index}
									disableInteractiveElementBlocking
								>
									{(provided, snapshot) => (
										<div
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
											style={getItemStyle(
												snapshot.isDragging,
												provided.draggableProps.style
											)}
										>
											{item.content}
										</div>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
		)
	}
}

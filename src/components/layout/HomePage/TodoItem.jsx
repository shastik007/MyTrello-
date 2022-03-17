import React, { useState } from 'react'
import TodoItemStyles from '../../styles/HomeStyles/TodoItemStyles'
import TodoItemList from './TodoItemList'
import AddCardForm from './AddCardForm'
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder'
import Button from '@mui/material/Button'
import AddBoxIcon from '@mui/icons-material/AddBox'
import { useDispatch, useSelector } from 'react-redux'
import { todoActions } from '../../../store/todo'
import DropDown from './DropDown'
import IconButton from '@mui/material/IconButton'


const TodoItem = (props) => {
	const [show, setShow] = useState(false)
	const toggleHandler = () => setShow((prev) => !prev)
	const dispatch = useDispatch()
	const archiveHandler = () => {
		dispatch(todoActions.archiveTodos({ todosId: props.id }))
	}

	return (
		<TodoItemStyles>
			<div className='head_todoitem'>
				<h3>{props.todos.todoName}</h3>
				<DropDown archive={archiveHandler} />
			</div>
			<TodoItemList todosId={props.id} todos={props.todos.todos} />
			{!show && (
				<div className='new_card'>
					<Button
						onClick={toggleHandler}
						variant='contained'
						startIcon={<AddBoxIcon />}
					>
						Add new Card
					</Button>
					<IconButton
						color='primary'
						aria-label='upload picture'
						component='span'
					>
						<CreateNewFolderIcon />
					</IconButton>
				</div>
			)}
			{show && <AddCardForm id={props.todos.id} toggle={toggleHandler} />}
		</TodoItemStyles>
	)
}

export default TodoItem

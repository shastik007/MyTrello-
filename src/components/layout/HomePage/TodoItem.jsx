import React, { useState } from 'react'
import TodoItemStyles from '../../styles/HomeStyles/TodoItemStyles'
import TodoItemList from './TodoItemList'
import AddCardForm from './AddCardForm'
import IconButton from '@mui/material/IconButton'
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder'
import Button from '@mui/material/Button'
import AddBoxIcon from '@mui/icons-material/AddBox'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

const TodoItem = (props) => {
	const [show, setShow] = useState(false)
	const toggleHandler = () => setShow((prev) => !prev)
   
	return (
		<TodoItemStyles>
			<div className='head_todoitem'>
				<h3>{props.todos.todoName}</h3>
				<IconButton
					color='primary'
					aria-label='upload picture'
					component='span'
				>
					<MoreHorizIcon />
				</IconButton>
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

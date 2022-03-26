import React, { useState } from 'react'
import styled from 'styled-components'
import IconButton from '@mui/material/IconButton'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import Modal from '../../UI/Modal'
import { todoActions } from '../../../store/todo'
import { useDispatch, useSelector } from 'react-redux'

const TodoItemSubItem = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 12px;
	width: 250px;
	height: 35px;
	border-radius: 7px;
	box-shadow: 0 0 8px gray;
	background-color: white;
	padding: 5px;
	margin: 0 auto;
	margin-bottom: 10px;
	transition: 0.5s;
	&:hover {
		background-color: #cec6c5;
	}

	& h3 {
		margin: 0;
		letter-spacing: 1px;
	}
`

const TodoItemList = (props) => {
	const id = useSelector((state) => state.todo.id)
	const dispatch = useDispatch()
	const [show, setShow] = useState(false)
	const toggleHandler = (id) => {
		setShow((prev) => !prev)
		dispatch(todoActions.editTask(id))
	}

	return (
		<div>
			{props.todos.map((el) => {
				return (
					<TodoItemSubItem key={el.id}>
						{show && el.id === id && (
							<Modal
								todosId={props.todosId}
								id={el.id}
								name={el.todos}
								onClick={toggleHandler}
							/>
						)}
						<h3>{el.todos}</h3>
						<IconButton
							onClick={() => toggleHandler(el.id)}
							color='primary'
							aria-label='upload picture'
							component='span'
						>
							<ModeEditIcon />
						</IconButton>
					</TodoItemSubItem>
				)
			})}
		</div>
	)
}

export default TodoItemList

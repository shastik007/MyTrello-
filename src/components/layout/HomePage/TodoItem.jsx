import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TodoItemStyles from '../../styles/HomeStyles/TodoItemStyles'
import { todoActions } from '../../../store/todo'
import TodoItemList from './TodoItemList'

const TodoItem = (props) => {
	const [value, setValue] = useState('')
	const [show, setShow] = useState(false)
	const dispatch = useDispatch()
	const changeHandler = (e) => setValue(e.target.value)
	const submitHandler = (e) => {
		e.preventDefault()
		dispatch(todoActions.addTask({ value, id: e.target.id }))
	}
	return (
		<TodoItemStyles>
			<p>{props.todos.todoName}</p>
			<TodoItemList todos={props.todos.todos} />
			{!show && (
				<div className='new_card' onClick={() => setShow((prev) => !prev)}>
					+ add new Card
				</div>
			)}
			{show && (
				<>
					<textarea
						value={value}
						onChange={changeHandler}
						type='text'
					/>
					<button onClick={submitHandler} id={props.todos.id}>
						add task
					</button>
					<button onClick={() => setShow((prev) => !prev)}>
						close
					</button>
				</>
			)}
		</TodoItemStyles>
	)
}

export default TodoItem

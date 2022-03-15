import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todoActions } from '../../../store/todo'
import AddTodoFormStyles from '../../styles/HomeStyles/AddTodoFormStyles'
import Button from '@mui/material/Button'

const AddTodoForm = (props) => {
	const [value, setValue] = useState('')
	const dispatch = useDispatch()

	const submitHandler = (e) => {
		e.preventDefault()
		dispatch(todoActions.add({ value }))
	}

	return (
		<AddTodoFormStyles>
			<div>
				<input
					value={value}
					onChange={(e) => setValue(e.target.value)}
					type='text'
				/>
			</div>
			<div className='wrapper_btn'>
				<Button onClick={submitHandler} variant='contained'>
					Add List
				</Button>
				<div onClick={props.onClick}>x</div>
			</div>
		</AddTodoFormStyles>
	)
}

export default AddTodoForm

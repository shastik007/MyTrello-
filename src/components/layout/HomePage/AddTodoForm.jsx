import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todoActions } from '../../../store/todo'
import AddTodoFormStyles from '../../styles/HomeStyles/AddTodoFormStyles'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const AddTodoForm = (props) => {
	const [value, setValue] = useState('')
	const dispatch = useDispatch()

	const submitHandler = (e) => {
		e.preventDefault()
		dispatch(todoActions.add({ value }))
		setValue('')
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
				<IconButton
					onClick={props.onClick}
					color='primary'
					aria-label='upload picture'
					component='span'
				>
					<VisibilityOffIcon />
				</IconButton>
			</div>
		</AddTodoFormStyles>
	)
}

export default AddTodoForm

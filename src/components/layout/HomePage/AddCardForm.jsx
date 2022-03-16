import React, { useRef } from 'react'
import { todoActions } from '../../../store/todo'
import AddCardFormStyles from '../../styles/HomeStyles/AddCardFormStyles'
import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import Button from '@mui/material/Button'
import { useDispatch } from 'react-redux'

const AddCardForm = (props) => {
	const dispatch = useDispatch()
	const textarea = useRef('')
	const submitHandler = (e) => {
		e.preventDefault()
		const value = textarea.current.value
		dispatch(todoActions.addTask({ value, id: props.id }))
		textarea.current.value = ''
	}
	return (
		<AddCardFormStyles>
			<textarea
				ref={textarea}
				name=''
				id=''
				cols='30'
				rows='10'
			></textarea>
			<div className='add_card_form_btns'>
				<div>
					<Button variant='contained' onClick={submitHandler}>
						Add new Card{' '}
					</Button>
					<IconButton
						onClick={props.toggle}
						color='primary'
						aria-label='upload picture'
						component='span'
					>
						<CloseIcon />
					</IconButton>
				</div>
				<IconButton
					color='primary'
					aria-label='upload picture'
					component='span'
				>
					<MoreHorizIcon />
				</IconButton>
			</div>
		</AddCardFormStyles>
	)
}

export default AddCardForm

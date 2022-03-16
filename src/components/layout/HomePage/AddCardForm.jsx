import React from 'react'
import AddCardFormStyles from '../../styles/HomeStyles/AddCardFormStyles'
import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import Button from '@mui/material/Button'

const AddCardForm = (props) => {
	return (
		<AddCardFormStyles>
			<textarea name='' id='' cols='30' rows='10'></textarea>
			<div className='add_card_form_btns'>
				<div>
					<Button variant='contained'>Add new Card </Button>
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

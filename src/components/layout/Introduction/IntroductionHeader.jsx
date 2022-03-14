import React from 'react'
import trello from '../../../assets/trello.png'
import IntroductionHeaderStyles from '../../styles/introductionStyles/IntroductionHeaderStyles'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

const IntroductionHeader = () => {
	return (
		<IntroductionHeaderStyles>
			<div>
				<img src={trello} alt='' />
			</div>
			<Stack spacing={5} direction='row'>
				<Button variant='text'>Login</Button>
				<Button variant='contained'>SignIn</Button>
			</Stack>
		</IntroductionHeaderStyles>
	)
}

export default IntroductionHeader

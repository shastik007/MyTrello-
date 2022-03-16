import React from 'react'
import trello from '../../../assets/trello.png'
import IntroductionHeaderStyles from '../../styles/introductionStyles/IntroductionHeaderStyles'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { Redirect } from 'react-router-dom'

const handler = () => {
	return <Redirect to='/login' />
}

const IntroductionHeader = () => {
	return (
		<IntroductionHeaderStyles>
			<div>
				<img src={trello} alt='' />
			</div>
			<Stack spacing={10} direction='row'>
				<Button onClick={handler} variant='text'>
					Login
				</Button>

				<Button
					onClick={() => <Redirect to='/signin' />}
					variant='contained'
				>
					SignIn
				</Button>
			</Stack>
		</IntroductionHeaderStyles>
	)
}

export default IntroductionHeader

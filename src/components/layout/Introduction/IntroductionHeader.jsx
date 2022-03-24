import React from 'react'
import trello from '../../../assets/trello.png'
import IntroductionHeaderStyles from '../../styles/introductionStyles/IntroductionHeaderStyles'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

const IntroductionHeader = () => {
	const navigate = useNavigate()
	return (
		<IntroductionHeaderStyles>
			<div>
				<img src={trello} alt='' />
			</div>
			<Stack spacing={10} direction='row'>
				<Button onClick={() => navigate('/login')} variant='text'>
					Login
				</Button>

				<Button onClick={() => navigate('/signup')} variant='contained'>
					SignIn
				</Button>
			</Stack>
		</IntroductionHeaderStyles>
	)
}

export default IntroductionHeader

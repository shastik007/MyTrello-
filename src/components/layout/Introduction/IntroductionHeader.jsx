import React from 'react'
import trello from '../../../assets/trello.png'
import IntroductionHeaderStyles from '../../styles/introductionStyles/IntroductionHeaderStyles'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { useHistory } from 'react-router-dom'

const IntroductionHeader = () => {
	const { push } = useHistory()
	return (
		<IntroductionHeaderStyles>
			<div>
				<img src={trello} alt='' />
			</div>
			<Stack spacing={10} direction='row'>
				<Button onClick={() => push('/login')} variant='text'>
					Login
				</Button>

				<Button onClick={() => push('/signup')} variant='contained'>
					SignIn
				</Button>
			</Stack>
		</IntroductionHeaderStyles>
	)
}

export default IntroductionHeader

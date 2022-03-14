import React from 'react'
import IntroductionSectionStyles from '../../styles/introductionStyles/IntroductionSectionStyles'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import hero from '../../../assets/hero.png'

const IntroductionSection = () => {
	return (
		<IntroductionSectionStyles>
			<div className='first_'>
				<h1>
					Trello помогает командам эффективно решать рабочие задачи.
				</h1>
				<p>
					Работайте в команде, управляйте проектами и выводите
					продуктивность на новый уровень собственным уникальным
					способом вместе с Trello.
				</p>
				<form>
					<TextField
						id='outlined-basic'
						label='Outlined'
						variant='outlined'
					/>
					<Button variant='contained'>Contained</Button>
				</form>
			</div>
			<img src={hero} alt="HEROf" />
		</IntroductionSectionStyles>
	)
}

export default IntroductionSection

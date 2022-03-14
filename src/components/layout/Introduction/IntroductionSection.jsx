import React from 'react'
import IntroductionSectionStyles from '../../styles/introductionStyles/IntroductionSectionStyles'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import hero from '../../../assets/hero.png'

const IntroductionSection = () => {
	return (
		<IntroductionSectionStyles>
			<div className='first_'>
				<h1><strong>Trello</strong> helps teams solve work challenges.</h1>
				<p>
					Team up, manage projects, and take productivity to the next
					level in your own unique way with Trello.
				</p>
				<form>
					<TextField
						id='outlined-basic'
						label='EMAIL'
						variant='outlined'
					/>
					<Button className='button' variant='contained'>register - it's free</Button>
				</form>
			</div>
			<img src={hero} alt='HEROf' />
		</IntroductionSectionStyles>
	)
}

export default IntroductionSection

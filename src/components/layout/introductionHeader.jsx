import React from 'react'
import trello from '../../assets/trello.png'
import IntroductionHeaderStyles from '../styles/introductionStyles/IntroductionHeaderStyles'

const IntroductionHeader = () => {
	return (
		<IntroductionHeaderStyles>
			<div>
				<img src={trello} alt='' />
			</div>
		</IntroductionHeaderStyles>
	)
}

export default IntroductionHeader

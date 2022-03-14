import React from 'react'
import LoginHeaderStyles from '../../styles/loginStyles/LoginHeaderStyles'
import trello_logo from '../../../assets/trello-logo.svg'

const LoginHeader = () => {
	return (
		<LoginHeaderStyles>
			<img src={trello_logo} alt='' />
		</LoginHeaderStyles>
	)
}

export default LoginHeader

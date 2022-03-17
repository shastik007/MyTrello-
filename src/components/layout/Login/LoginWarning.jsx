import React from 'react'
import LoginWarningStyles from '../../styles/loginStyles/LoginWarningStyles'

const LoginWarning = (props) => {
	return (
		<LoginWarningStyles>
			<h4>{props.message.message}</h4>
		</LoginWarningStyles>
	)
}

export default LoginWarning

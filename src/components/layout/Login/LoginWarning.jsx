import React from 'react'
import LoginWarningStyles from '../../styles/loginStyles/LoginWarningStyles'

const LoginWarning = (props) => {
	console.log(props)
	return (
		<LoginWarningStyles>
			<h4>{props.validMessage}</h4>
		</LoginWarningStyles>
	)
}

export default LoginWarning

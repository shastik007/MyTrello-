import React from 'react'
import LoginWarningStyles from '../../styles/loginStyles/LoginWarningStyles'

const LoginWarning = (props) => {
	const { message } = props.message
	return <LoginWarningStyles>{message}</LoginWarningStyles>
}

export default LoginWarning

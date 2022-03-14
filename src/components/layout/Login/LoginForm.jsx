import React from 'react'
import LoginFormStyles from '../../styles/loginStyles/LoginFormStyles'
import Input from '../../UI/Input'
import Button from '@mui/material/Button'

const LoginForm = () => {
	return (
		<LoginFormStyles>
			<h5>Login to Trello</h5>
			<Input />
			<Input />
			<Button className='button_' variant='contained' color='success'>
				Log In
			</Button>
            <h6>OR</h6>

		</LoginFormStyles>
	)
}

export default LoginForm

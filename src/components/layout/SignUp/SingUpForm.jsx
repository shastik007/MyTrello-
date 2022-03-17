import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useState } from 'react'

const SignUpFormStyle = styled.form``

const SignUpForm = (props) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const onChangeEmail = (e) => {
		setEmail(e.target.value)
	}
	const onChangePassword = (e) => {
		setPassword(e.target.value)
	}

	const submitHandler = (e) => {
		e.preventDefault()
		props.submit(email, password)
	}

	return (
		<SignUpFormStyle>
			<div>
				<TextField
					id='standard-multiline-flexible'
					label='Multiline'
					multiline
					maxRows={4}
					value={email}
					onChange={onChangeEmail}
					variant='standard'
				/>
			</div>
			<div>
				<TextField
					id='standard-multiline-flexible'
					label='Multiline'
					multiline
					maxRows={4}
					value={password}
					onChange={onChangePassword}
					variant='standard'
				/>
			</div>
			<div>
				<Button onClick={submitHandler} variant='outlined'>
					Outlined
				</Button>
			</div>
		</SignUpFormStyle>
	)
}

export default SignUpForm

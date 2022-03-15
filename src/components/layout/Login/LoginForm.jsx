import React, { useState } from 'react'
import { authActions } from '../../../store/auth'
import { users } from '../../../accauntUsers/accauntUsers'
import LoginFormStyles from '../../styles/loginStyles/LoginFormStyles'
import Input from '../../UI/Input'
import Button from '@mui/material/Button'
import { FcGoogle } from 'react-icons/fc'
import { FaMicrosoft } from 'react-icons/fa'
import { AiFillApple } from 'react-icons/ai'
import { BsSlack } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import LoginWarning from './LoginWarning'

const LoginForm = () => {
	const dispatch = useDispatch()
	const auth = useSelector((state) => state.auth)
	const [inputValues, setInputValues] = useState({
		email: '',
		password: '',
		isValidFields: null,
		isFoundAccount: null,
	})

	const onChangeInputs = (e) => {
		const key = e.target.name
		setInputValues({
			...inputValues,
			[key]: e.target.value,
			isValidFields: null,
			isFoundAccount: null,
		})
	}

	const onSubmitHandler = (e) => {
		e.preventDefault()
		if (inputValues.email !== '' && inputValues.password !== '') {
			users.map((user, index) => {
				if (
					user.email === inputValues.email &&
					user.password === inputValues.password
				) {
					dispatch(authActions.login())
				} else {
					setInputValues({
						...inputValues,
						isFoundAccount: { message: 'User is not found' },
					})
				}
			})
		} else {
			setInputValues({
				...inputValues,
				isValidFields: { message: 'not all fields are filled' },
			})
		}
	}

	return (
		<LoginFormStyles>
			{inputValues.isValidFields && (
				<LoginWarning message={inputValues.isValidFields.message} />
			)}
			{inputValues.isFoundAccount && (
				<LoginWarning message={inputValues.isFoundAccount.message} />
			)}
			<h5>Log in to Trello</h5>
			<Input
				name='email'
				type='email'
				value={inputValues.email}
				onChange={onChangeInputs}
			/>
			<Input
				name='password'
				type='password'
				value={inputValues.password}
				onChange={onChangeInputs}
			/>
			<Button
				onClick={onSubmitHandler}
				className='button_'
				variant='contained'
				color='success'
			>
				Log In
			</Button>
			<h6>OR</h6>
			<Button
				className='button_'
				variant='contained'
				color='secondary'
				startIcon={<FcGoogle />}
			>
				GOOGLE
			</Button>
			<Button
				className='button_'
				variant='contained'
				color='secondary'
				startIcon={<FaMicrosoft />}
			>
				MICROSOFT
			</Button>
			<Button
				className='button_'
				variant='contained'
				color='secondary'
				startIcon={<AiFillApple />}
			>
				APPLE
			</Button>
			<Button
				className='button_'
				variant='contained'
				color='secondary'
				startIcon={<BsSlack />}
			>
				SLACK
			</Button>
			<a href=''>
				<h4>Log in with SSO </h4>
			</a>
			<hr />
			<h5>
				<a href=''>can't login </a> /{' '}
				<a href=''>Sign up for an account</a>
			</h5>
		</LoginFormStyles>
	)
}

export default LoginForm

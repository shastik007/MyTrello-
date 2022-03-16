import React, { useState } from 'react'
import { authActions } from '../../../store/auth'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import SignUpForm from './SingUpForm'

const SignUp = () => {
	const dispatch = useDispatch()
	const { push } = useHistory()

	const submitHandler = (email, password) => {
		const auth = getAuth()
		createUserWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				console.log(user)
				dispatch(
					authActions.setUser({
						token: user.accessToken,
						email: user.email,
						id: user.uid,
					}),
				)
				push('/home')
			})
			.catch((error) => console.log(error.message))
	}
	return <SignUpForm submit={submitHandler} />
}

export default SignUp

import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const SignUp = () => {
	const [values, setValues] = useState({
		email: '',
		password: '',
	})
	const changeHandler = (e) => {
		const key = e.target.name
		setValues({
			...values,
			[key]: e.target.value,
		})
	}

	const submitHandler = (e) => {
		e.preventDefault()
		const auth = getAuth()
		createUserWithEmailAndPassword(auth, values.email, values.password)
			.then((obj) => {
				console.log(obj)
			})
			.catch((error) => console.log(error.message))
	}
	return (
		<form>
			<h1>hello</h1>
			<div>
				<input
					onChange={changeHandler}
					value={values.email}
					name='email'
					placeholder='email'
					type='text'
				/>
				<input
					onChange={changeHandler}
					value={values.password}
					name='password'
					placeholder='password'
					type='text'
				/>
				<button onClick={submitHandler}>sign up</button>
			</div>
		</form>
	)
}

export default SignUp

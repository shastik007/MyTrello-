import React, { useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import Header from './Header'
import HomePageStyles from '../../styles/HomeStyles/HomePageStyles'
import TodoList from './TodoList'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import img from '../../../assets/homeback.avif'
import { useSelector } from 'react-redux'

const HomeStyleGlobal = createGlobalStyle`
  body{
	  background:var(--background-home);
	  background-size: cover;
	  
  }
`
const HomePage = () => {
	const auth = useAuth()
	const [value, setValue] = useState('')
	const changeHandler = (e) => {
		setValue(e.target.value)
	}
	console.log(auth,'auth home')
	return (
		<>
			{auth.isAuth ? (
				<>
					<HomeStyleGlobal />
					<HomePageStyles>
						<Header val={value} change={changeHandler} />
						<TodoList searchValue={value} />
					</HomePageStyles>
				</>
			) : (
				<Navigate to='/login' />
			)}
		</>
	)
}

export default HomePage

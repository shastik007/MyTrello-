import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Header from './Header'
import HomePageStyles from '../../styles/HomeStyles/HomePageStyles'
import TodoList from './TodoList'
import { Redirect } from 'react-router-dom'
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

	return (
		<>
			{auth.isAuth ? (
				<>
					<HomeStyleGlobal />
					<HomePageStyles>
						<Header />
						<TodoList />
					</HomePageStyles>
				</>
			) : (
				<Redirect to='/login' />
			)}
		</>
	)
}

export default HomePage

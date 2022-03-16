import React from 'react'
import Header from './Header'
import HomePageStyles from '../../styles/HomeStyles/HomePageStyles'
import TodoList from './TodoList'
import { Redirect } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'

const HomePage = () => {
	const auth = useAuth()

	return (
		<>
			{auth.isAuth ? (
				<>
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

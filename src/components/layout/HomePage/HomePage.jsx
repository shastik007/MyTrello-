import React from 'react'
import Header from './Header'
import HomePageStyles from '../../styles/HomeStyles/HomePageStyles'
import TodoList from './TodoList'
import { Redirect } from 'react-router-dom'

const HomePage = () => {
	return (
		<HomePageStyles>
			<Header />
			<TodoList />
		</HomePageStyles>
	)
}

export default HomePage

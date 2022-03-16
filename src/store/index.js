import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { todoSlice } from './todo'

const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		todo: todoSlice.reducer,
	},
})

export default store

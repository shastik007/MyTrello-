import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { todoSlice } from './todo'
import { todosApi } from './todosApi'

const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		todo: todoSlice.reducer,
		[todosApi.reducerPath]: todosApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(todosApi.middleware),
})

export default store

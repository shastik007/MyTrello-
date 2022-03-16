import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
	name: 'authentification',
	initialState: {
		email: null,
		token: null,
		id: null,
	},
	reducers: {
		setUser: (state, actions) => {
			state.email = actions.payload.email
			state.token = actions.payload.token
			state.id = actions.payload.id
		},
		removeUser: (state) => {
			state.email = null
			state.token = null
			state.id = null
		},
	},
})

export const authActions = authSlice.actions

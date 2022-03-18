import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { AUTH } from '../utils/constats'
import { getLocalStorage, saveToLocalStorage } from '../utils/helpers'

export const addUser = createAsyncThunk(
	'authentification/checkIsAuth',
	async (userInfo) => {
		console.log(userInfo)
		saveToLocalStorage(AUTH, userInfo)
		return userInfo
	},
)

export const getUser = createAsyncThunk(
	'authentification/checkIsAuth',
	async () => {
		const json = getLocalStorage(AUTH)
	},
)

export const removeUser = createAsyncThunk(
	'authentification/checkIsAuth',
	async () => {},
)

export const authSlice = createSlice({
	name: 'authentification',
	initialState: {
		email: null,
		token: null,
		id: null,
	},
	reducers: {
		// setUser: (state, actions) => {
		// 	state.email = actions.payload.email
		// 	state.token = actions.payload.token
		// 	state.id = actions.payload.id
		// },
		removeUser: (state) => {
			state.email = null
			state.token = null
			state.id = null
		},
	},
	extraReducers: {
		[addUser.fulfilled]: (state, actions) => {
			console.log(actions.payload,'action');
			state.email = actions.payload.email
			state.token = actions.payload.token
			state.id = actions.payload.id
		},
	},
})

export const authActions = authSlice.actions

import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
	name: 'todo',
	initialState: [],
	reducers: {
		add: (state, actions) => {
			state.push({
				id: Math.random().toString(),
				todoName: actions.payload.value,
				todos: [],
			})
		},
	},
})

export const todoActions = todoSlice.actions

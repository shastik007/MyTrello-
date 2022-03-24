import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
	name: 'todo',
	initialState: {
		todoData: [],
		archive: [],
	},
	reducers: {
		add: (state, actions) => {
			state.todoData.push({
				id: Math.random().toString(),
				todoName: actions.payload.value,
				todos: [],
			})
		},
		addTask: (state, actions) => {
			const current = state.todoData.find(
				(el) => el.id == actions.payload.id,
			)
			if (current) {
				current.todos.push({
					todos: actions.payload.value,
					id: Math.random().toString(),
				})
			}
		},
		deleteTask: (state, actions) => {
			const { taskId, todosId } = actions.payload
			state.todoData = state.todoData.map((el)=>{
				if(el.id === todosId){
					el.todos = el.todos.filter((task)=>task.id !== taskId)
				}
				return el
			})
		},
		updateTask: (state, actions) => {
			const { taskId, todosId, updatedTask } = actions.payload
			const currentTodos = state.todoData.find((el) => el.id === todosId)
			if (currentTodos) {
				const currentIndex = currentTodos.todos.findIndex(
					(el) => el.id === taskId,
				)
				currentTodos.todos[currentIndex].todos = updatedTask
			}
		},
		archiveTodos: (state, actions) => {
			const { todosId } = actions.payload
			const currentIndex = state.todoData.findIndex(
				(el) => el.id === todosId,
			)
			state.archive.push(state.todoData[currentIndex])
			state.todoData.splice(currentIndex, 1)
		},
		unzipTodos: (state, actions) => {
			const { todoId } = actions.payload
			const currentIndex = state.archive.findIndex(
				(el) => el.id === todoId,
			)
			state.todoData.push(state.archive[currentIndex])
			state.archive.splice(currentIndex, 1)
		},
		editTask(state, action) {
			state.id = action.payload
		},
	},
})

export const todoActions = todoSlice.actions

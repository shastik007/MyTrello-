import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FIREBASEURL } from '../utils/constats'

export const todosApi = createApi({
	reducerPath: 'todosApi',
	baseQuery: fetchBaseQuery({
		baseUrl: FIREBASEURL,
	}),
	endpoints: (builder) => ({
		getAllTodos: builder.query({
			query: () => 'todos/.json',
		}),
		setTodo: builder.mutation({
			query: (body) => ({
				url: `todos/.json`,
				method: 'POST',
				body,
			}),
		}),

	}),
})

export const { useGetAllTodosQuery, useSetTodoMutation } = todosApi

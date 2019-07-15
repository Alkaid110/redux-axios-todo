import { CHANGE_INPUT, ADD_TODO, DELETE_TODO, FETCH_DATA } from './actionTypes'

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value
})
export const addTodoAction = () => ({
  type: ADD_TODO
})
export const deleteTodoAction = (index) => ({
  type: DELETE_TODO,
  index
})
export const fetchData = (data) => ({
  type: FETCH_DATA,
  data
})
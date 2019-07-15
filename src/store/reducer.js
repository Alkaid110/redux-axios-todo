import { CHANGE_INPUT, ADD_TODO, DELETE_TODO, FETCH_DATA } from './actionTypes'

const defaultState = {
  inputValue: 'add your todos',
  list: []
}
export default (state = defaultState, action) => {
  //Reducer里只能接受state，不能改变state
  //根据不同的action type执行不同的操作
  if (action.type === FETCH_DATA) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list = action.data.data.list
    return newState
  }
  if (action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if (action.type === ADD_TODO) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.unshift(state.inputValue)
    newState.inputValue = ''
    return newState
  }
  if (action.type === DELETE_TODO) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }
  return state
}
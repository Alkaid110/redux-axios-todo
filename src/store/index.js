import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer,
  //&&前面为真则继续执行，||前面为假则继续执行
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store

// store 应该是唯一的
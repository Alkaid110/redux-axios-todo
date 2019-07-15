import React, { Component } from 'react';
import axios from 'axios'
import TodoListUI from './TodoListUI'
import store from './store'
import {
  changeInputAction,
  addTodoAction,
  deleteTodoAction,
  fetchData
} from './store/actionCreactors'

class TodoList extends Component {
  //也可以写进constructor，用this
  state = store.getState()
  constructor(props) {
    super(props)
    this.changeInputValue = this.changeInputValue.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.addTodo = this.addTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    store.subscribe(this.storeChange)
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        changeInputValue={this.changeInputValue}
        addTodo={this.addTodo}
        list={this.state.list}
        deleteTodo={this.deleteTodo}
      />
    );
  }
  //生命周期的钩子函数中使用axios获取远程数据
  componentDidMount() {
    axios.get('https://www.easy-mock.com/mock/5d2bcc395fb7810a6be034a4/redux-demo/redux-axios')
      .then((res) => {
        const data = res.data
        const action = fetchData(data)
        store.dispatch(action)
      })
  }



  //根据store改变显示的数据
  storeChange() {
    this.setState(store.getState())
  }
  //根据输入改变input里的值
  changeInputValue(el) {
    const action = changeInputAction(el.target.value)
    store.dispatch(action)
  }

  //点击按钮添加todo
  addTodo() {
    const action = addTodoAction()
    store.dispatch(action)
  }

  //点击todo项删除
  deleteTodo(index) {
    const action = deleteTodoAction(index)
    store.dispatch(action)
  }
}


export default TodoList;
import React from 'react';
import { Input, Button, List, notification } from 'antd'
import 'antd/dist/antd.css'
import './style.css'

// 无状态组件的写法，比component的写法性能更好，当组件没有业务逻辑的时候尽量使用
const openNotification = () => {
  notification.open({
    message: '注意！',
    description: 'todo不能为空！',
    duration: 3.5
  })
}

const TodoListUI = (props) => {
  return (
    <div className="container">
      <h1> This is a todo list with redux</h1>
      <div>
        <Input
          placeholder={props.inputValue}
          style={{ margin: "10px", width: "250px" }}
          value={props.inputValue}
          onChange={props.changeInputValue}
          onKeyPress={
            (e) => {
              if (e.key === 'Enter') {
                if (props.inputValue === '') {
                  openNotification()
                  return
                }
                props.addTodo()
              }
            }
          }
        />
        <Button
          type="primary"
          onClick={() => {
            if (props.inputValue === '') {
              openNotification()
              return
            }
            props.addTodo()
          }}
        >
          增加
      </Button>
      </div>
      <div style={{ width: "250px", marginLeft: "10px" }}>
        <List
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item
              onClick={() => { props.deleteTodo(index) }}>
              {item}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

//component的写法，因为集成了Component，会有许多原型上的属性和方法，造成性能浪费
// class TodoListUI extends Component {
//   render() {
//     return (<div>
//       <h1> This is a todo list with redux</h1>
//       <div>
//         <Input
//           placeholder={this.props.inputValue}
//           style={{ margin: "10px", width: "250px" }}
//           onChange={this.props.changeInputValue}
//           value={this.props.inputValue}
//         />
//         <Button type="primary" onClick={this.props.addTodo}>增加</Button>
//       </div>
//       <div style={{ width: "250px", marginLeft: "10px" }}>
//         <List
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (
//             <List.Item
//               onClick={() => { this.props.deleteTodo(index) }}>{item}</List.Item>
//           )}
//         />
//       </div>
//     </div>);
//   }
// }

export default TodoListUI;